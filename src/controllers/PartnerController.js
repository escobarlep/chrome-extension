import PartnerFormView from '/src/views/PartnerFormView.js'
import PartnerFraudView from '/src/views/PartnerFraudView.js'
import PartnerRepository from '/src/repositories/PartnerRepository.js'

export default {
  _repo: PartnerRepository,
  view: PartnerFormView,
  viewFraud: PartnerFraudView,
  initializer: function(mainApp, callback){
    this._mainApp = mainApp
    this._collectPartner = callback.collectPartner
    this._collectCurrentUrl = callback.getCurrentURL
    this._repo.setStorage(this._mainApp.storage)
    this.updateView()
  },
  collectFromView: function(id){
    const data = this._mainApp.document.getElementById(id)
    if (!data) return ''

    return data.value
  },
  collectAndSaveData: function(data){
    data.collectedAt = new Date()
    this._repo.save(data)
    this.updateView()
  },
  updatePartnerFromView: function(){
    const partner = {
      name: this.collectFromView(this.view.idName),
      cnpj: this.collectFromView(this.view.idCnpj),
      email: this.collectFromView(this.view.idEmail),
      phone: this.collectFromView(this.view.idPhone),
      site: this.collectFromView(this.view.idSite),
      obs: this.collectFromView(this.view.idObs),
    }
    this._repo.save(partner)

    return partner
  },
  reportFraud: function(url){
    const partner = this._repo.getPartner()
    const data = { ...partner, url}
    if (/movidesk/gi.test(url)) {
      this.setMessage('error', 'Necessário estar no sistema Movidesk para coletar o ticket')
      return
    }
    this.viewFraud.setData(data)
    this._mainApp.renderView(this.viewFraud)
    partner.isFraud = true
    this._repo.save(partner)
  },
  setMessage: function(type, msg){
    const alert = this._mainApp.document.getElementById(this.view.idDivAlert)
    alert.innerHTML = this.view.getMessage(type, msg)
    alert.hidden = false
  }, 
  clearView: function(){
    this._repo.clearPartner()
    this.updateView()
  },
  updateView: function(){
    this.view.setData(this._repo.getPartner())
    this._mainApp.renderView(this.view)
    this._activateViewListeners()
  },
  _activateViewListeners: function(){
    const btnUpdate = this._mainApp.document.getElementById(this.view.idBtnUpdatePartner)
    const btnClear = this._mainApp.document.getElementById(this.view.idBtnClear)
    const btnCollect = this._mainApp.document.getElementById(this.view.idBtnCollect)
    const btnReportFraud = this._mainApp.document.getElementById(this.view.idBtnReportFraud)
    const bindedCallUpdate = this.updatePartnerFromView.bind(this)
    const bindedCallClear = this.clearView.bind(this)
    const bindedCollect = this.collectAndSaveData.bind(this)
    const bindedCallReportFraud = this.reportFraud.bind(this)
    const bindedCallbackCollectUrl = this._collectCurrentUrl
    const bindedCollectPartner = this._collectPartner
    
    btnUpdate.addEventListener('click', function() {
      bindedCallUpdate()
    })
    btnClear.addEventListener('click', function() {
      bindedCallClear()
    })
    btnCollect.addEventListener('click', function() {
      chrome.tabs.executeScript(
        { code: '(' + bindedCollectPartner + ')()' }, 
        ([partner]) => {
          if (partner) bindedCollect(partner)
        }
      )
    })
    btnReportFraud.addEventListener('click', function() {
      chrome.tabs.executeScript(
        { code: '(' + bindedCallbackCollectUrl + ')()' }, 
        data => bindedCallReportFraud(data)
      )
    })
  }
}
