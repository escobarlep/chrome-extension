'use strict'

export default {
  id: '#partner-data',
  _data: {},
  idName: 'partner-name',
  idCnpj: 'partner-cnpj',
  idEmail: 'partner-email',
  idPhone: 'partner-phone',
  idSite: 'partner-site',
  idBtnUpdatePartner: 'btn-update-partner',
  idBtnClear: 'btn-clear-partner',
  idBtnCollect: 'btn-collect-partner',
  setData: function(data) {
    this._data = data
  },
  template: function() {
    const partner = this._data
    return `
      <div class="row">
        <fieldset>
          <legend>Parceiro</legend>
          <div class="input-field col s12">
            <input id="partner-name" type="text" value="${partner.name}">
            <label for="partner-name">Razão Social</label>
          </div>
          <div class="input-field col s6">
            <input id="partner-cnpj" type="text" value="${partner.cnpj}">
            <label for="partner-cnpj">CNPJ</label>
          </div>
          <div class="input-field col s6">
            <input id="partner-phone" type="text" value="${partner.phone}">
            <label for="partner-phone">Contato</label>
          </div>
          <div class="input-field col s8">
            <input id="partner-email" type="email" value="${partner.email}">
            <label for="partner-email">Email</label>
          </div>
          <div class="input-field col s4">
            <input id="partner-site" type="text" value="${partner.site}">
            <label for="partner-site">Site</label>
          </div>
          <div class="input-field col s12">
            <div class="center">
              <button id="btn-collect-partner" class="waves-effect waves-light btn indigo darken-4">Coletar</button>
              <button id="btn-update-partner" class="waves-effect waves-light btn indigo darken-4">Atualizar</button>
              <button id="btn-clear-partner" class="waves-effect waves-light btn indigo darken-4">Limpar Dados</button>
            </div>
          </div>
        </fieldset>
      </div>
    `
  }
}
