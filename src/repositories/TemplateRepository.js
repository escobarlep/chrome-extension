export default {
  _namePrefix: 'app-max-templ-',

  setStorage: function(storage) {
    this._storage = storage
  },

  getNamePrefix: function() {
    return this._namePrefix
  },

  getByName: function(name) {
    name = name.trim().replaceAll(' ','-')
    const fullName = `${this._namePrefix}${name}`
    const data = this._storage.getItem(fullName)
    return JSON.parse(data)
  },

  listAllTemplates: function() {
    const keys = Object.keys(this._storage)
    const regexp = new RegExp(this._namePrefix)
    return keys.filter(storageKey => regexp.test(storageKey))
  }
}
