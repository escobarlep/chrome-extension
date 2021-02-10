export default {
  id: '#app',
  idContent: 'nav-main-content',
  idLogOut: 'user-logout',
  title: '<a href="#" class="brand-logo">Maxter CX</a>',
  template: function() {
    return `
      <nav>
        <div id='nav-main-content' class="nav-wrapper">
          ${this.title}
        </div>
      </nav>
      <div class="row">
        <div id="user-data" class="row"></div>
      </div>
      <div class="row">
        <div id="customer-data" class="row"></div>
        <div id="partner-data" class="row"></div>
      </div>
      <div class="row">
        <div id="template-list-view" class="row"></div>
      </div>`
  }
}
