export default {
  _prefix: 'app-max-fraud-list',

  setStorage: function(storage) {
    this.storage = storage
  },
  getPrefix: function() {
    return this._prefix
  },
  getAll: function() {
    const result = this.storage.getItem(this.getPrefix())
    if (!result) return []
    return JSON.parse(result)
  },
  save: function(data) {
    this.storage.setItem(this.getPrefix(), JSON.stringify(data))
  }
}
