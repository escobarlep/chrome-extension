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
          <div class="col s12">
            <label for="partner-name">Razão Social</label>
            <input id="partner-name" type="text" value="${partner.name}">
          </div>
          <div class="col s6">
            <label for="partner-cnpj">CNPJ</label>
            <input id="partner-cnpj" type="text" value="${partner.cnpj}">
          </div>
          <div class="col s6">
            <label for="partner-phone">Contato</label>
            <input id="partner-phone" type="text" value="${partner.phone}">
          </div>
          <div class="col s8">
            <label for="partner-email">Email</label>
            <input id="partner-email" type="email" value="${partner.email}">
          </div>
          <div class="col s4">
            <label for="partner-site">Site</label>
            <input id="partner-site" type="text" value="${partner.site}">
          </div>
          <div class="col s12">
            <div class="center">
              <button id="btn-collect-partner" class="waves-effect waves-light btn indigo darken-4">Coletar</button>
              <button id="btn-update-partner" class="waves-effect waves-light btn indigo darken-4">Atualizar</button>
              <button id="btn-clear-partner" class="waves-effect waves-light btn indigo darken-4">Limpar Dados</button>
            </div>
          </div>
        </fieldset>
      </div>`
  }
}
