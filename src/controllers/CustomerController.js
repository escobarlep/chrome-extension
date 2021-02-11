'use strict'
import CustomerFormView from '/src/views/CustomerFormView.js'
import CustomerRepository from '/src/repositories/CustomerRepository.js'

export default {
  _repo: CustomerRepository,
  view: CustomerFormView,
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
  updateCustomerFromView: function(){
    const customer = {
      name: this.collectFromView(this.view.idName),
      cpf: this.collectFromView(this.view.idCpf),
      email: this.collectFromView(this.view.idEmail),
      order: this.collectFromView(this.view.idOrder),
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
  updateView: function(callback){
    this.view.setData(this._repo.getCustomer())
    this._mainApp.renderView(this.view)
    this._activateViewListeners(callback)
  },
  _activateViewListeners: function(){
    const doc = this._mainApp.document
    const elems = doc.querySelectorAll('.tooltipped')
    this._mainApp.fwCssManager.Tooltip.init(elems)

    const btnUpdate = doc.getElementById(this.view.idBtnUpdateCustomer)
    const btnClear = doc.getElementById(this.view.idBtnClear)
    const btnCollect = doc.getElementById(this.view.idBtnCollect)
    const bindedCallUpdate = this.updateCustomerFromView.bind(this)
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
      chrome.tabs.executeScript({ code: '(' + bindedCallback + ')()' }, 
        (results) => {
          const customer = results[0]
          bindedCollect(customer)
        }
      )
    })
  },
}
