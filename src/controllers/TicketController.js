import TicketRepository from '/src/repositories/TicketRepository.js'
import CustomerRepository from '/src/repositories/CustomerRepository.js'
import PartnerRepository from '/src/repositories/PartnerRepository.js'
import TemplateRepository from '/src/repositories/TemplateRepository.js'
import MainWindowView from '/src/views/MainWindowView.js'
import CustomerFormView from '/src/views/CustomerFormView.js'
import PartnerFormView from '/src/views/PartnerFormView.js'

export default {
  _repo: TicketRepository,
  _customerRepo: CustomerRepository,
  _partnerRepo: PartnerRepository,
  _templateRepo: TemplateRepository,
  viewMain: MainWindowView,
  viewCustomer: CustomerFormView,
  viewPartner: PartnerFormView,
  initializer: function(mainApp){
    this._mainApp = mainApp
    this.setStorage()
    this.updateView()
  },
  setStorage: function () {
    this._repo.setStorage(this._mainApp.storage)
    this._customerRepo.setStorage(this._mainApp.storage)
    this._partnerRepo.setStorage(this._mainApp.storage)
    this._templateRepo.setStorage(this._mainApp.storage)
  },
  collectAndSaveTicket: function() {
    const customer = this._customerRepo.getCustomer()
    const partner = this._partnerRepo.getPartner()
    const template = this._templateRepo.getLastUsedTempl()
    this._repo.add({ customer, partner, template })
    const btnClearCustomer = this._mainApp.document.getElementById(this.viewCustomer.idBtnClear)
    const btnClearPartner = this._mainApp.document.getElementById(this.viewPartner.idBtnClear)
    this._templateRepo.clearHistory()
    if (btnClearCustomer) btnClearCustomer.click()
    if (btnClearPartner) btnClearPartner.click()
  },
  updateView: function() {
    this._activateViewListeners()
  },
  _activateViewListeners: function() {
    const btnSave = this._mainApp.document.getElementById(this.viewMain.idSaveTicket)
    const btnOpenHist = this._mainApp.document.getElementById(this.viewMain.idOpenHist)
    const bindedCallSave = this.collectAndSaveTicket.bind(this)
    
    btnSave.addEventListener('click', function() {
      bindedCallSave()
    })

    btnOpenHist.addEventListener('click', function() {
      chrome.tabs.create({ url: '/src/public/history.html' })
    })
  }
}
