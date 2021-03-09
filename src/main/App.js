import dbSetup from '/src/migrations/initial-setup.js'
export default {
  _migrationVersion: '24',
  setStorage: function(storage) {
    this.storage = storage
  },
  setCssFramework: function(M) {
    this.fwCssManager = M
  },
  setDocument: function(doc) {
    this.document = doc
  },
  setWindow: function(window) {
    this.window = window
  },
  renderView: function(view) {
    const htmlElement = this.document.querySelector(view.id)
    htmlElement.innerHTML = ''
    htmlElement.innerHTML = view.template()
    if ('postRender' in view) view.postRender(this.document, this.window)
  },
  bootstrap: function() {
    dbSetup(this.storage, this._migrationVersion)
  }
}
