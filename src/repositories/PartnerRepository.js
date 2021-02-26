'use strict'
const Partner = {
  name: '',
  cnpj: '',
  email: '',
  site: '',
  phone: '',
  obs: '',
  isFraud: false,
  collectedAt: ''
}

export default {
  _prefix: 'app-max-partner',

  setStorage: function(storage) {
    this.storage = storage
  },
  getPrefix: function() {
    return this._prefix
  },
  save: function(data) {
    const partnerModel = Object.assign({}, Partner, data)
    const stringifiedData = JSON.stringify(partnerModel)
    this.storage.setItem(`${this._prefix}`, stringifiedData)

    return partnerModel
  },
  update: function(data) {
    const partner = this.getPartner()
    const partnerModel = Object.assign(partner, data)
    this.storage.setItem(`${this._prefix}`, JSON.stringify(partnerModel))
  },
  getPartner: function() {
    const data = this.storage.getItem(`${this._prefix}`)

    if (data) return JSON.parse(data)
    else return this.clearPartner()
  },
  clearPartner: function() {
    return this.save(Partner)
  },
  setName: function(name) {
    const partner = this.getPartner()
    partner.name = name.trim()

    this.save(partner)
  },
  setCnpj: function(cnpj) {
    const partner = this.getPartner()
    partner.cnpj = cnpj.trim()

    this.save(partner)
  },
  setEmail: function(email) {
    const partner = this.getPartner()
    partner.email = email.trim()

    this.save(partner)
  }
}
