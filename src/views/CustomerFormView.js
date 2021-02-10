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
        <fieldset>
          <legend>Cliente</legend>
          <div class="col s8">
            <label for="customer-name">Nome</label>
            <input id="customer-name" type="text" value="${customer.name}">
          </div>
          <div class="col s4">
            <label for="customer-cpf">CPF</label>
            <input id="customer-cpf" type="text" value="${customer.cpf}">
          </div>
          <div class="col s6">
            <label for="customer-email">Email</label>
            <input id="customer-email" type="email" value="${customer.email}">
          </div>
          <div class="col s6">
            <label for="customer-order">Nº Pedido</label>
            <input id="customer-order" type="text" value="${customer.order}">
          </div>
          <div class="col s6">
            <label for="customer-tracking">Nº de rastreio</label>
            <input id="customer-tracking" type="text" value="${customer.tracking}">
          </div>
          <div class="col s6">
            <label for="customer-tracking-status">Status de rastreio</label>
            <input id="customer-tracking-status" type="text" value="${customer.trackingStatus}">
          </div>
          <div class="input-field col s12">
            <div class="center">
              <button id="btn-collect-customer" class="waves-effect waves-light btn indigo darken-4">Coletar</button>
              <button id="btn-update-customer" class="waves-effect waves-light btn indigo darken-4">Atualizar</button>
              <button id="btn-clear-customer" class="waves-effect waves-light btn indigo darken-4">Limpar</button>
            </div>
          </div>
        </fieldset>
      </div>`
  }
}
