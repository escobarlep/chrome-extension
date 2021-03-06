export default {
  id: '#app',
  _data: 0,
  idContent: 'nav-main-content',
  idCounter: 'nav-total-tickets-count',
  idLogOut: 'user-logout',
  idSaveTicket: 'save-ticket',
  idOpenHist: 'open-history',
  setData: function(data) {
    this._data = data
  },
  title: function() {
    return `
    <i id="save-ticket" class="material-icons left" style="cursor:pointer;margin-left: 15px">get_app</i>
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
      <div id="template-list-view"></div>`
  }
}
