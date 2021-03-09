export default {
  id: 'app',
  window: '/src/public/fraud-list.html',
  _data: null,
  idFraudListField: 'fraud-list',
  idNoFundListField: 'no-funds-list',
  idFraudListUpdate: 'fraud-list-update',
  idNoFundsListUpdate: 'no-funds-list-update',
  setData: function(data) {
    this._data = data
  },
  template: function() {
      return `
        <div class="col s12 m6">
          <div class="col s12">
            <label for="fraud-list">Lista de Suspeita de Fraude</label>
            <textarea class="browser-default" id="fraud-list"></textarea>
          </div>
          <div class="col s12 center">
            <button class="waves-effect waves-light btn indigo darken-4" id="fraud-list-update">Atualizar Lista</button>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="col s12">
            <label for="no-funds-list">Lista de Negativados</label>
            <textarea class="browser-default" id="no-funds"></textarea>
          </div>
          <div class="col s12 center">
            <button class="waves-effect waves-light btn indigo darken-4" id="no-funds-list-update">Atualizar Lista</button>
          </div>
        </div>
      `
  }
}
