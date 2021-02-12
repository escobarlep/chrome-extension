'use strict'
const Customer = {
  name: '',
  cpf: '',
  email: '',
  order: '',
  tracking: '',
  trackingStatus: '',
  collectedAt: ''
}

export default {
  _prefix: 'app-max-customer',
  setStorage: function(storage) {
    this.storage = storage
  },
  getPrefix: function() {
    return this._prefix
  },
  save: function(data) {
    const customerModel = Object.assign({}, Customer, data)
    const stringifiedData = JSON.stringify(customerModel)
    this.storage.setItem(`${this._prefix}`, stringifiedData)

    return customerModel
  },
  update: function(data) {
    const customerFromDB = this.getCustomer()
    const customerModel = Object.assign(customerFromDB, data)
    this.storage.setItem(`${this._prefix}`, JSON.stringify(customerModel))
  },
  getCustomer: function() {
    let data = this.storage.getItem(`${this._prefix}`)

    if (data) return JSON.parse(data)
    else return this.clearCustomer()
  },
  clearCustomer: function() {
    return this.save(Customer)
  }
}
