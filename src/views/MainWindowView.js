'use strict'

export default {
  id: '#app',
  template: function() {
    return `
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo center">Maxter CX</a>
          <ul id="nav-mobile" class="left hide-on-med-and-down">
          </ul>
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
      </div>
      <div class="row">
        <div id="div-log" class="row"></div>
      </div>
    `
  }
}

// Razão Social
// Email