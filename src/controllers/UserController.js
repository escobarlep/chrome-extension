'use strict'
import UserRepository from '/src/repositories/UserRepository.js'
import UserFormView from '/src/views/UserFormView.js'

export default {
  _repo: UserRepository,
  view: UserFormView,

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
    this.view.setData(this._repo.getName())
    this._mainApp.renderView(this.view)
    this._activateViewListeners()
  },

  clearView: function(){
    this._repo.clearName()
    this.updateView()
  },

  _activateViewListeners: function() {
    const buttonRegister = this._mainApp.document.getElementById(this.view.idBtnUserRegister)
    const buttonChange = this._mainApp.document.getElementById(this.view.idBtnUserChangeRegister)
    const bindCallRemoveName = this.clearView.bind(this)
    const bindCallUpdateDataFromView = this.collectAndUpdateFromView.bind(this)
    const bindCallUpdateView = this.updateView.bind(this)

    if (buttonRegister) {
      buttonRegister.addEventListener('click', function() {
        bindCallUpdateDataFromView()
        bindCallUpdateView()
      })
    } else if (buttonChange) {
      buttonChange.addEventListener('click', function() {
        bindCallRemoveName()
        bindCallUpdateView()
      })
    }
  },
}
