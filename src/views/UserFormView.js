'use strict'

export default {
  id: '#user-data',
  idBtnUserRegister: 'user-register',
  idBtnUserChangeRegister: 'change-user',
  idUserName: 'user-name',
  setData: function(data) {
    this._data = data
  },
  template: function() {
    if (this._data) {
      return `
        <h4 class="center">Bem Vinde ${this._data}</h4>
        <p class="center">Para alterar o usuário, clique 
          <a id="change-user" href="#">AQUI<a>
        </p>
      `
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
