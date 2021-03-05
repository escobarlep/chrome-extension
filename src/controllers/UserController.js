import UserRepository from '/src/repositories/UserRepository.js'
import UserFormView from '/src/views/UserFormView.js'
import MainWindowView from '/src/views/MainWindowView.js'

export default {
  _repo: UserRepository,
  view: UserFormView,
  viewMain: MainWindowView,

  initializer: function(mainApp){
    this._mainApp = mainApp
    this._repo.setStorage(this._mainApp.storage)
    this.updateView()
  },

  collectAndUpdateFromView: function(){
    const data = this._mainApp.document.getElementById(this.view.idUserName)
    if (!data) return this._repo.clearName()

    this._repo.setName(data.value)
  },

  updateView: function(){
    this.renderView()
  },
  renderView: function (params) {
    const user = this._repo.getName()
    this.view.setData(user)
    const registerView = this._mainApp.document.querySelector(this.view.id)
    const nav = this._mainApp.document.getElementById(this.viewMain.idContent)
    if (user) {
      registerView.hidden = true
      nav.innerHTML += this.view.template()
    } else {
      registerView.hidden = false
      nav.innerHTML = this.viewMain.title()
      this._mainApp.renderView(this.view)
    }
    this._activateViewListeners()
  },
  clearView: function(){
    this._repo.clearName()
    this.updateView()
  },
  _activateViewListeners: function() {
    const M = this._mainApp.fwCssManager
    const doc = this._mainApp.document
    const elems = doc.querySelectorAll('.dropdown-trigger')
    
    const buttonRegister = doc.getElementById(this.view.idBtnUserRegister)
    const buttonChange = doc.getElementById(this.viewMain.idLogOut)
    const bindCallRemoveName = this.clearView.bind(this)
    const bindCallUpdateDataFromView = this.collectAndUpdateFromView.bind(this)
    const bindCallUpdateView = this.updateView.bind(this)

    M.Dropdown.init(elems)

    if (buttonChange) {
      buttonChange.addEventListener('click', function() {
        bindCallRemoveName()
        bindCallUpdateView()
      })
    } else if (buttonRegister) {
      buttonRegister.addEventListener('click', function() {
        bindCallUpdateDataFromView()
        bindCallUpdateView()
      })
    } 
  }
}
