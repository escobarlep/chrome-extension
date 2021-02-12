export default {
  id: '#app',
  idContent: 'nav-main-content',
  idLogOut: 'user-logout',
  idSaveTicket: 'save-ticket',
  title: '<i id="save-ticket" class="material-icons left" style="cursor:pointer;margin-left: 15px">get_app</i><h6 class="brand-logo">Maxter CX</h6>',
  template: function() {
    return `
      <nav>
        <div id='nav-main-content' class="nav-wrapper">
          ${this.title}
        </div>
      </nav>
      <div id="user-data" class="row"></div>
      <div id="customer-data" class="col s6"></div>
      <div id="partner-data" class="col s6"></div>
      <div id="template-list-view"></div>`
  }
}
