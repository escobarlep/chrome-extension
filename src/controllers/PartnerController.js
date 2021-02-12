import PartnerFormView from '/src/views/PartnerFormView.js'
import PartnerRepository from '/src/repositories/PartnerRepository.js'

export default {
  _repo: PartnerRepository,
  view: PartnerFormView,
  initializer: function(mainApp, callback){
    this._mainApp = mainApp
    this._callback = callback
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
    }
    this._repo.save(partner)

    return partner
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
    const bindedCallUpdate = this.updatePartnerFromView.bind(this)
    const bindedCallClear = this.clearView.bind(this)
    const bindedCollect = this.collectAndSaveData.bind(this)
    const bindedCallback = this._callback
    
    btnUpdate.addEventListener('click', function() {
      bindedCallUpdate()
    })
    btnClear.addEventListener('click', function() {
      bindedCallClear()
    })
    btnCollect.addEventListener('click', function() {
      chrome.tabs.executeScript(
        { code: '(' + bindedCallback + ')()' }, 
        ([partner]) => {
          if (partner) bindedCollect(partner)
        }
      )
    })
  }
}
