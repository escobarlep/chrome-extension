export default {
  id: '#partner-data',
  _data: {},
  idBtnReportFraud: 'btn-report-fraud',
  setData: function(data) {
    this._data = data
  },
  template: function() {
    const partner = this._data
    const { url } = this._data
    return `
      <div style="font-size:12px;text-align:justify;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;" id="copy-and-paste-fraud">
        <p hidden="true" id="alert-copy-success-fraud" class="green-text">Dados Copiados <i class="material-icons green-text">check</i><p>
        ${url} <br>
        <b>Parceiro: ${partner.name} / ${partner.cnpj} <br>
        Site: ${partner.site} <br>
        Motivo: ${partner.obs} </b> <br>
      </div>
    `
  },
  postRender: function(dom, window) {
    const range = dom.createRange()
    const div = dom.getElementById("copy-and-paste-fraud")
    const alert = dom.getElementById("alert-copy-success-fraud")
    range.selectNode(div)
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(range)
    dom.execCommand("copy")
    window.getSelection().removeAllRanges()
    alert.hidden=false
  }
}
