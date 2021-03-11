import PartnerFormView from '/src/views/PartnerFormView.js'
import PartnerFraudView from '/src/views/PartnerFraudView.js'
import PartnerRepository from '/src/repositories/PartnerRepository.js'
import CustomerRepository from '/src/repositories/CustomerRepository.js'
import PartnerIrregularityListController from '/src/controllers/PartnerIrregularityListController.js'

export default {
  _customerRepo: CustomerRepository,
  _repo: PartnerRepository,
  _irregularityController: PartnerIrregularityListController,
  view: PartnerFormView,
  viewFraud: PartnerFraudView,
  initializer: function(mainApp, callback){
    this._mainApp = mainApp
    this._collectPartner = callback.collectPartner
    this._collectCurrentUrl = callback.getCurrentURL
    this._irregularityController.setDocument(this._mainApp.document)
    this.setStorage()
    this.updateView()
  },
  setStorage: function(){
    this._repo.setStorage(this._mainApp.storage)
    this._irregularityController.setStorage(this._mainApp.storage)
    this._customerRepo.setStorage(this._mainApp.storage)
  },
  collectFromView: function(id){
    const data = this._mainApp.document.getElementById(id)
    if (!data) return ''

    return data.value
  },
  collectAndSaveData: function(partner){
    partner.collectedAt = new Date()
    partner.isFraud = this._irregularityController.isPartnerListedAsFraud(partner)
    partner.hasNoFunds = this._irregularityController.isPartnerListedAsNoFunds(partner)
    this._repo.save(partner)
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
    partner.isFraud = this._irregularityController.isPartnerListedAsFraud(partner)
    partner.hasNoFunds = this._irregularityController.isPartnerListedAsNoFunds(partner)

    this._repo.save(partner)
    this.updateView()

    return partner
  },
  reportFraud: function(url){
    const partner = this._repo.getPartner()
    const { orderUrl } = this._customerRepo.getCustomer()
    const data = { ...partner, url, orderUrl}
    if (!/movidesk/gi.test(url)) {
      this.setMessage('error', 'Necessário estar no sistema Movidesk para coletar o ticket')
      return
    }
    this.viewFraud.setData(data)
    this._mainApp.renderView(this.viewFraud)
    partner.reportedAsFraud = true
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
    const partner = this._repo.getPartner()
    this.view.setData(partner)
    this._mainApp.renderView(this.view)
    this._activateViewListeners()
    if (partner.isFraud) this.setMessage('error', 'Parceiro está listado como <b>Fraude</b>')
    if (partner.hasNoFunds) this.setMessage('error', 'Parceiro está listado como <b>Negativado</b>')
    if (partner.hasNoFunds && partner.isFraud) this.setMessage('error', 'Parceiro está listado como <b>Fraude</b> e <b>Negativado</b>')
  },
  _activateViewListeners: function(){
    const btnUpdate = this._mainApp.document.getElementById(this.view.idBtnUpdatePartner)
    const btnClear = this._mainApp.document.getElementById(this.view.idBtnClear)
    const btnCollect = this._mainApp.document.getElementById(this.view.idBtnCollect)
    const btnReportFraud = this._mainApp.document.getElementById(this.view.idBtnReportFraud)
    const btnImportFraudList = this._mainApp.document.getElementById(this.view.idOpenFraudList)
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

    btnImportFraudList.addEventListener('click', function() {
      chrome.tabs.create({ url: '/src/public/fraud-list.html' })
    })
  }
}
