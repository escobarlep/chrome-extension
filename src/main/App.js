import dbSetup from '/src/migrations/initial-setup.js'
export default {
  _migrationVersion: '6',
  setStorage: function(storage) {
    this.storage = storage
  },
  setDocument: function(doc) {
    this.document = doc
  },
  renderView: function(view) {
    this._view = view
    const htmlElement = this.document.querySelector(this._view.id)
    htmlElement.innerHTML = ''
    htmlElement.innerHTML = this._view.template()
    if ('postRender' in this._view) this._view.postRender(this.document)
  },
  initialSetUp: function() {
    dbSetup(this.storage, this._migrationVersion)
  }
}
