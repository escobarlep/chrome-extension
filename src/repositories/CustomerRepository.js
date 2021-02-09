'use strict'

const Customer = {
  name: '',
  cpf: '',
  email: '',
  order: '',
  tracking: '',
  trackingStatus: ''
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
    const customer = this.getCustomer()
    const customerModel = Object.assign(customer, data)
    const stringifiedData = JSON.stringify(customerModel)
    this.storage.setItem(`${this._prefix}`, stringifiedData)
  },
  getCustomer: function() {
    let data = this.storage.getItem(`${this._prefix}`)

    if (data) return JSON.parse(data)
    else return this.clearCustomer()
  },
  clearCustomer: function() {
    return this.save(Customer)
  },
  setName: function(name) {
    let customer = this.getCustomer()
    customer.name = name.trim()

    this.save(customer)
  },
  setCpf: function(cpf) {
    let customer = this.getCustomer()
    customer.cpf = cpf.trim()

    this.save(customer)
  },
  setEmail: function(email) {
    let customer = this.getCustomer()
    customer.email = email.trim()

    this.save(customer)
  },
  setOrder: function(order) {
    let customer = this.getCustomer()
    customer.order = order.trim()

    this.save(customer)
  },
  setTracking: function(tracking) {
    let customer = this.getCustomer()
    customer.tracking = tracking.trim()

    this.save(customer)
  }
}
