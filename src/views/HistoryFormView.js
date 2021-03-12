export default {
  tabulator: null,
  id: 'app',
  idTable: '#table',
  idBtnDownloadXlsx: 'download-xlsx',
  window: '/src/public/history.html',
  _data: null,
  complexity: {
    high: 'Alta',
    medium: 'Média',
    low: 'Baixa'
  },
  setTmaCalc: function(func) {
    this.tmaCalc = func
  },
  setData: function(data) {
    this._data = data
  },
  mountJSTable: function() {
    if (!this._data) return
    this.tabulator = new Tabulator(this.idTable, {
      height:205,
      data: this.mountJSData(),
      layout:"fitColumns",
      columns: this.mountJSColumns()
   });
  },
  mountJSColumns: function() {
    return [
      {title:"Data", field:"createdAt"},
      {title:"Pedido", field:"customerOrder", formatter:"html"},
      {title:"Nome Cliente", field:"customerName"},
      {title:"Nome Parceiro", field:"partnerName"},
      {title:"Site", field:"partnerSite"},
      {title:"Template", field:"templateName"},
    ]
  },
  mountJSData: function() {
    return this._data.map(data => {
      const newDate = new Date(data.createdAt)
      const hours = newDate.toTimeString().split(' ')[0]
      const formatedDate = (new Intl.DateTimeFormat('pt-br')).format(newDate)
      const date = data.createdAt.replace('T', ' ').slice(0, -5)
      let customerOrder = data.customer && data.customer.order ? data.customer.order : data.customerOrder
      if (data.customer && data.customer.orderUrl) {
        customerOrder = `<a target="blank" href="${data.customer.orderUrl}">${data.customer.order}</a>`
      }
      const customerName = data.customer && data.customer.name ? data.customer.name : data.customerName
      const partnerName = data.partner && data.partner.name ? data.partner.name : data.partnerName
      const partnerSite = data.partner && data.partner.site ? data.partner.site : data.partnerSite
      const templateName = data.template && data.template.name ? data.template.name : data.templateName
      return {
        customerOrder,
        customerName,
        partnerName,
        partnerSite,
        templateName,
        createdAt: date,
        formatedDate: `${formatedDate} - ${hours}`
      }
    })
  },
  mountTBody: function() {
    const keys = Object.keys(this._data)
    let tBody = ''
    keys.forEach(key => {
      tBody += this._data[key].map(history => `
        <tr class="${history.partnerFraud ? 'red-text' : '' }">
          <td><span hidden>${history.createdAt}</span>${history.formatedDate}</td>
          <td>${history.customer ? history.customer.order : history.customerOrder}</td>
          <td>${history.customer ? history.customer.name : history.customerName}</td>
          <td>${history.partner ? history.partner.name : history.partnerName}</td>
          <td>${history.partner ? history.partner.site : history.partnerSite}</td>
          <td>${history.template ? history.template.name : ''}</td>
          <td>${history.complexity && this.complexity[history.complexity] ? this.complexity[history.complexity] : ''}</td>
        </tr>
      `
      ).join('')
    })

    return tBody
  },
  mountCardSummary: function() {
    const totalByDate = Object.keys(this._data).reverse()

    return totalByDate.map(date => {
      const tma = this.tmaCalc(this._data, date)
      return `
      <div class="col s12 m3 L2">
        <div class="card-panel black">
          <p class="center white-text">
            ${date} : ${this._data[date].length} <br>
            TMA = ${tma} (Min/Tickets)
          </p>
        </div>
      </div>
    `
    }).join('')
  },
  template: function() {
    if (this._data) {
      const sumUp = this.mountCardSummary(this._data)
      const tBody = this.mountTBody(this._data)
      return `
        <div class="row">${sumUp}</div>
        <table class="responsive-table striped highlight">
          <thead>
            <tr>
              <th>Data</th>
              <th>Pedido</th>
              <th>Cliente</th>
              <th>Nome do Parceiro</th>
              <th>Site</th>
              <th>Template Selecionada</th>
              <th>Complexidade</th>
            </tr>
          </thead>
          <tbody>
            ${tBody}
          </tbody>
        </table>`
    }

    return '<div class="row"><p class="red-text"> Histórico não encontrado <i class="material-icons red-text">error</i></p></div>'
  }
}
