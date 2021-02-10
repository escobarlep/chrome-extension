'use strict'
export default {
  id: '#template-list-view',
  _data: null,
  setData: function(data) {
    this._data = data
  },
  template: function() {
    if (this._data) {
      return `
        <div class="row">
          <div class="col s12 center">
            <textArea rows="9" id="copy-and-paste">${this._data}</textArea>
            <p hidden="true" id="alert-copy-success" class="green-text">Dados Copiados <i class="material-icons green-text">check</i><p>
          </div>
        </div>`
    }

    return '<div class="row"><p class="red-text"> TEMPLATES NÃO ENCONTRADOS <i class="material-icons red-text">error</i></p></div>'
  },
  postRender: function(dom) {
    const textArea = dom.querySelector('#copy-and-paste')
    const alert = dom.querySelector('#alert-copy-success')
    textArea.select();
    dom.execCommand('copy');
    textArea.hidden=true
    alert.hidden=false
  }
}
