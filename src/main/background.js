//console.log('background')

const CustomerRepository = {
  _prefix: 'app-max-customer',

  setStorage: function(storage) {
    this._storage = storage
  },
  getPrefix: function() {
    return this._prefix
  },
  save: function(data) {
    const stringifiedData = JSON.stringify(data)
    this._storage.setItem(`${this._prefix}`, stringifiedData)
  },
  getCustomer: function() {
    let data = this._storage.getItem(`${this._prefix}`)

    if (data) return JSON.parse(data)
    else return this.clearCustomer()
  },
  clearCustomer: function() {
    const customer = {
      name: '',
      cpf: '',
      email: '',
      order: '',
      tracking: '',
      trackingStatus: '',
    }
    this.save(customer)

    return customer
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

console.log(chrome)
console.log(chrome.browserAction.onClicked.addListener)
console.log(chrome.runTime)
CustomerRepository.setStorage(window.localStorage)
console.log(CustomerRepository)

chrome.browserAction.onClicked.addListener(function (tab) {
  console.log('DENTRO')

  chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, function(data) {
    console.log('MAIS DENTRO', data)

    CustomerRepository.setStorage(window.localStorage)
    CustomerRepository.setName(data)
  });
})
