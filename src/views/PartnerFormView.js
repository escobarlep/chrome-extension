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
        <p class="center"><b>Parceiro</b></p>
        <div class="center center-align">
          <i id="btn-collect-partner" style="cursor:pointer" class="tiny material-icons waves-effect waves-light blue-appmax btn-floating">content_copy</i>
          <i id="btn-update-partner" style="cursor:pointer" class="tiny material-icons waves-effect waves-light green-appmax btn-floating">save</i>
          <i id="btn-clear-partner" style="cursor:pointer" class="tiny material-icons waves-effect waves-light red darken-4 btn-floating">clear</i>
        </div>
        <div class="col s12">
          <input placeholder="Razão Social" id="partner-name" type="text" value="${partner.name}">
        </div>
        <div class="col s12">
          <input placeholder="CNPJ" id="partner-cnpj" type="text" value="${partner.cnpj}">
        </div>
        <div class="col s12">
          <input placeholder="Contato" id="partner-phone" type="text" value="${partner.phone}">
        </div>
        <div class="col s12">
          <input placeholder="Email" id="partner-email" type="email" value="${partner.email}">
        </div>
        <div class="col s12">
          <input placeholder="Site" id="partner-site" type="text" value="${partner.site}">
        </div>
      </div>`
  }
}
