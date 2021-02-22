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
            <p hidden="true" id="alert-copy-success" class="green-text">Dados Copiados <i class="material-icons green-text">check</i><p>
            <div style="font-size:12px;text-align:justify;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;" id="copy-and-paste">${this._data}</div>
          </div>
        </div>`
    }

    return '<div class="row"><p class="red-text"> TEMPLATES NÃO ENCONTRADOS <i class="material-icons red-text">error</i></p></div>'
  },
  postRender: function(dom, window) {
    var range = dom.createRange()
    const div = dom.getElementById("copy-and-paste")
    const alert = dom.getElementById("alert-copy-success")
    range.selectNode(div)
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(range)
    dom.execCommand("copy")
    window.getSelection().removeAllRanges()
    //div.hidden=true
    alert.hidden=false
  }
}
