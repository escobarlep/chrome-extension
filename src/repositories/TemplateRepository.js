export default {
  _prefix: 'app-max-templates',
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
  addHistory: function(template) {
    const data = {
      date: new Date(),
      name: template.name,
      id: template.id
    }
    return this._storage.setItem(this.getHistoryPrefix(), JSON.stringify(data))
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
  getById: function(id) {
    let data = this.listAllTemplates()
    const template = data.find(templ => templ.id === Number(id))

    if (!template) return {}
    return template
  },
  listAllTemplates: function() {
    const data = this._storage.getItem(this.getPrefix())
    return JSON.parse(data)
  }
}
