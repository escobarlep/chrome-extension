export default {
  id: '#customer-data',
  _data: {},
  idName: 'customer-name',
  idCpf: 'customer-cpf',
  idEmail: 'customer-email',
  idOrder: 'customer-order',
  idTracking: 'customer-tracking',
  idTrackingStatus: 'customer-tracking-status',
  idBtnUpdateCustomer: 'btn-update-customer',
  idBtnClear: 'btn-clear-customer',
  idBtnCollect: 'btn-collect-customer',
  setData: function(data) {
    this._data = data
  },
  template: function() {
    const customer = this._data
    return `
      <div class="row">
        <p class="center"><b>Cliente</b></p>
        <div class="center center-align">
          <i id="btn-collect-customer" style="cursor:pointer" class="tiny material-icons waves-effect waves-light blue-appmax btn-floating">content_copy</i>
          <i id="btn-update-customer" style="cursor:pointer" class="tiny material-icons waves-effect waves-light green-appmax btn-floating">save</i>
          <i id="btn-clear-customer" style="cursor:pointer" class="tiny material-icons waves-effect waves-light red darken-4 btn-floating">clear</i>
        </div>
        <div class="row" style="padding: 15px">
          <div class="col s12">
            <input placeholder="Nome" id="customer-name" type="text" value="${customer.name}">
          </div>
          <div class="col s12">
            <input placeholder="CPF" id="customer-cpf" type="text" value="${customer.cpf}">
          </div>
          <div class="col s12">
            <input placeholder="Email" id="customer-email" type="email" value="${customer.email}">
          </div>
          <div class="col s12">
            <input placeholder="Nº Pedido" id="customer-order" type="text" value="${customer.order}">
          </div>
          <div class="col s12">
            <input placeholder="Nº de rastreio" id="customer-tracking" type="text" value="${customer.tracking}">
          </div>
          <div class="col s12">
            <input placeholder="Status de rastreio" id="customer-tracking-status" type="text" value="${customer.trackingStatus}">
          </div>
        </div>
      </div>`
  }
}
