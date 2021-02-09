export default {
  _prefix: 'app-max-user-name',
  setStorage: function(storage) {
    this.storage = storage
  },
  getNamePrefix: function() {
    return this._prefix
  },
  getName: function() {
    return this.storage.getItem(`${this._prefix}`)
  },
  clearName: function() {
    return this.storage.removeItem(`${this._prefix}`)
  },
  setName: function(name) {
    return this.storage.setItem(`${this._prefix}`, name)
  }
}
