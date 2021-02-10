export default {
  id: '#app',
  idContent: 'nav-main-content',
  idLogOut: 'user-logout',
  title: '<h6 class="brand-logo">Maxter CX</h6>',
  template: function() {
    return `
      <nav>
        <div id='nav-main-content' class="nav-wrapper">
          ${this.title}
        </div>
      </nav>
      <div id="user-data" class="row"></div>
      <div class="row">
        <div id="customer-data" class="col s6"></div>
        <div id="partner-data" class="col s6"></div>
      </div>
      <div class="row">
        <div id="template-list-view"></div>
      </div>`
  }
}
