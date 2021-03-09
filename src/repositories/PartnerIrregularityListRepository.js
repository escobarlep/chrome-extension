export default {
  _prefixFunds: 'app-max-no-funds-list',
  _prefixFraud: 'app-max-fraud-list',

  setStorage: function(storage) {
    this.storage = storage
  },
  getPrefix: function(type) {
    return type === 'fraud' ? this._prefixFraud : this._prefixFunds
  },
  getFraudList: function() {
    const result = this.storage.getItem(this.getPrefix('fraud'))
    if (!result) return []
    return JSON.parse(result)
  },
  getNoFundsList: function() {
    const result = this.storage.getItem(this.getPrefix('funds'))
    if (!result) return []
    return JSON.parse(result)
  },
  saveFraudList: function(data) {
    this.storage.setItem(this.getPrefix('fraud'), JSON.stringify(data))
  },
  saveNoFundsList: function(data) {
    this.storage.setItem(this.getPrefix('funds'), JSON.stringify(data))
  }
}
