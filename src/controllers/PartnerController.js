import PartnerFormView from '/src/views/PartnerFormView.js'
import PartnerRepository from '/src/repositories/PartnerRepository.js'
import CustomerRepository from '/src/repositories/CustomerRepository.js'

export default {
  _repo: PartnerRepository,
  view: PartnerFormView,
  initializer: function(mainApp, callback){
    this._mainApp = mainApp
    this._callback = callback
    this._repo.setStorage(this._mainApp.storage)
    this.updateView(callback)
  },
  collectFromView: function(id){
    const data = this._mainApp.document.getElementById(id)
    if (!data) return ''

    return data.value
  },
  collectAndSaveData: function(data){
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
  updateView: function(callback){
    this.view.setData(this._repo.getPartner())
    this._mainApp.renderView(this.view)
    this._activateViewListeners(callback)
  },
  _activateViewListeners: function(){
    const doc = this._mainApp.document
    const elems = doc.querySelectorAll('.tooltipped')
    this._mainApp.fwCssManager.Tooltip.init(elems)

    const btnUpdate = this._mainApp.document.getElementById(this.view.idBtnUpdatePartner)
    const btnClear = this._mainApp.document.getElementById(this.view.idBtnClear)
    const btnCollect = this._mainApp.document.getElementById(this.view.idBtnCollect)
    const bindedCallUpdate = this.updatePartnerFromView.bind(this)
    const bindedCallClear = this.clearView.bind(this)
    const bindedCollect = this.collectAndSaveData.bind(this)
    const bindedCallback = this._callback
    CustomerRepository.setStorage(this._mainApp.storage)
    const bindedCustomerRepositoryUpdate = CustomerRepository.update.bind(CustomerRepository)
    
    btnUpdate.addEventListener('click', function() {
      bindedCallUpdate()
    })
    btnClear.addEventListener('click', function() {
      bindedCallClear()
    })
    btnCollect.addEventListener('click', function() {
      chrome.tabs.executeScript({ code: '(' + bindedCallback + ')()' }, 
        (results) => {
        const { partner, trackingStatus } = results[0]
        bindedCollect(partner)
        if (trackingStatus) bindedCustomerRepositoryUpdate({ trackingStatus })
      })
    })
  }
}
