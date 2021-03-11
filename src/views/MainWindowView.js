export default {
  id: '#app',
  _data: 0,
  idContent: 'nav-main-content',
  idCounter: 'nav-total-tickets-count',
  idLogOut: 'user-logout',
  idSaveTicket: 'save-ticket',
  classSelectType: '.select-type',
  idOpenHist: 'open-history',
  setData: function(data) {
    this._data = data
  },
  title: function() {
    return `
      <i class="material-icons left modal-trigger" href="#modal-historico" style="cursor:pointer;margin-left: 15px">get_app</i>
      <span style="cursor:pointer;margin-left: 15px" id="nav-total-tickets-count" class="white chip blue-appmax-text">${this._data}</span>
      <h6 class="brand-logo">Maxter CX</h6>`
  },
  template: function() {
    return `
      <nav>
        <div id='nav-main-content' class="nav-wrapper">${this.title()}</div>
      </nav>
      <div id="user-data" class="row"></div>
      <div id="customer-data" class="col s6"></div>
      <div id="partner-data" class="col s6"></div>
      <div id="template-list-view"></div>

      <div id="modal-historico" class="modal">
        <nav>
          <div id='nav-main-content' class="nav-wrapper"><h6 class="brand-logo">Histórico</h6></div>
        </nav>
        <div class="modal-content row">
          <!-- <h5 class="center"> Salvar atendimento </h5> -->
          <div class="col s12 center">
            <p>
              <p class="center">Nível de complexidade do atendimento</p>
              <label>
                <input data-type="easy" class="with-gap select-type" name="group1" type="radio"><span>Fácil</span>
              </label> 
              <label>
                <input data-type="medium" class="with-gap select-type" name="group1" type="radio" checked="checked"><span>Médio</span>
              </label> 
              <label>
                <input data-type="hard" class="with-gap select-type" name="group1" type="radio"><span>Difícil</span>
              </label>
            </p>
          </div>
          <div class="col s12 center">
            <button id="save-ticket" class="modal-close green-appmax waves-effect waves-light btn">
              Salvar
              <i id="btn-update-customer" style="cursor:pointer" class="right tiny material-icons">save</i>
            </button>
          </div>
        </div>
      </div>`
  },
  postRender: function(dom, window) {
    var elems = dom.querySelectorAll('.modal');
    window.M.Modal.init(elems);
  }
}
