export default {
  _prefix: 'app-max-templ-',
  _prefixHistory: 'app-max-last-templ',

  setStorage: function(storage) {
    this._storage = storage
  },
  getLastUsedTempl: function() {
    const result = this._storage.getItem(this.getHistoryPrefix())
    if (result) return JSON.parse(result)

    return false
  },
  clearHistory: function() {
    this._storage.removeItem(this.getHistoryPrefix())
  },
  addHistory: function(templ) {
    const template = {
      date: new Date(),
      name: templ
    }
    return this._storage.setItem(this.getHistoryPrefix(), JSON.stringify(template))
  },
  getPrefix: function() {
    return this._prefix
  },
  getHistoryPrefix: function() {
    return this._prefixHistory
  },
  getByName: function(name) {
    name = name.trim().replaceAll(' ','-')
    const fullName = `${this._prefix}${name}`
    const data = this._storage.getItem(fullName)
    return JSON.parse(data)
  },
  listAllTemplates: function() {
    const keys = Object.keys(this._storage)
    const regexp = new RegExp(this._prefix)
    return keys.filter(storageKey => regexp.test(storageKey))
  }
}
