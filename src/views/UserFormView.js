'use strict'

export default {
  id: '#user-data',
  idDisplay: 'user-display-ul',
  idBtnUserRegister: 'user-register',
  idBtnUserChangeRegister: 'change-user',
  idUserName: 'user-name',
  setData: function(data) {
    this._data = data
  },
  template: function() {
    if (this._data) {
      return `
      <ul id="dropdown-user" class="dropdown-content">
        <li><a href="#!" id="user-logout">logout</a></li>
      </ul>
      <ul class="right" id="user-display-ul">
        <li><a class="dropdown-trigger" id="user-display" href="#!" data-target="dropdown-user">${this._data}<i class="material-icons right">arrow_drop_down</i></a></li>
      </ul>`
    }

    return `
      <div class="row">
        <fieldset>
          <legend>Cadastrar Usuário</legend>
          <div class="input-field col s12">
            <input id="user-name" type="text">
            <label for="user-name">Nome</label>
          </div>
          <div class="input-field col s12 center">
            <button class="waves-effect waves-light btn indigo darken-4" id="user-register">Cadastrar</button>  
          </div>
        </fieldset>
      </div>
    `
  }
}
