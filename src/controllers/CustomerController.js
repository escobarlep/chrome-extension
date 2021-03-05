import CustomerFormView from '/src/views/CustomerFormView.js'
import CustomerRepository from '/src/repositories/CustomerRepository.js'

export default {
  _repo: CustomerRepository,
  view: CustomerFormView,
  initializer: function(mainApp, callbacks){
    this._mainApp = mainApp
    this._collectDataFromWeb = callbacks.collectCustomer
    this._collectDataFromWebTracking = callbacks.getTrackingData
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
  collectAndUpdateData: function(data){
    this._repo.update(data)
    this.updateView()
  },
  updateCustomerFromView: function(){
    const { orderUrl } = this._repo.getCustomer()
    const customer = {
      name: this.collectFromView(this.view.idName),
      cpf: this.collectFromView(this.view.idCpf),
      email: this.collectFromView(this.view.idEmail),
      order: this.collectFromView(this.view.idOrder),
      orderUrl: orderUrl,
      tracking: this.collectFromView(this.view.idTracking),
      trackingStatus: this.collectFromView(this.view.idTrackingStatus)
    }
    this._repo.save(customer)

    return customer
  },
  clearView: function(){
    this._repo.clearCustomer()
    this.updateView()
  },
  updateView: function(){
    this.view.setData(this._repo.getCustomer())
    this._mainApp.renderView(this.view)
    this._activateViewListeners()
  },
  _activateViewListeners: function(){
    const btnUpdate = this._mainApp.document.getElementById(this.view.idBtnUpdateCustomer)
    const btnClear = this._mainApp.document.getElementById(this.view.idBtnClear)
    const btnCollect = this._mainApp.document.getElementById(this.view.idBtnCollect)
    const bindedCallUpdate = this.updateCustomerFromView.bind(this)
    const bindedCallClear = this.clearView.bind(this)
    const bindedCollect = this.collectAndSaveData.bind(this)
    const bindedCollectAndUpdate = this.collectAndUpdateData.bind(this)
    const bindCollectDataFromWeb = this._collectDataFromWeb
    const bindCollectDataFromWebForTracking = this._collectDataFromWebTracking
    
    btnUpdate.addEventListener('click', function() {
      bindedCallUpdate()
    })

    btnClear.addEventListener('click', function() {
      bindedCallClear()
    })

    btnCollect.addEventListener('click', function() {
      chrome.tabs.executeScript(
        { code: '(' + bindCollectDataFromWeb + ')()' },
        ([customer]) => {
          if (customer) bindedCollect(customer)
        }
      )
      setTimeout(() => {
        chrome.tabs.executeScript(
          { code: '(' + bindCollectDataFromWebForTracking + ')()' },
          ([trackingData]) => {
            if (trackingData) bindedCollectAndUpdate(trackingData)
          }
        ) 
      }, 3000)
    })
  },
}
