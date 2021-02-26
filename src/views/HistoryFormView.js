export default {
  id: 'app',
  window: '/src/public/history.html',
  _data: null,
  setData: function(data) {
    this._data = data
  },
  summarize: function() {
    const organizer = []
    const tBody = this._data.map(history => {
      var newDate = new Date(history.createdAt)
      const hours = newDate.toTimeString().split(' ')[0]
      var formatedDate = (new Intl.DateTimeFormat('pt-br')).format(newDate)
      // const keySummary = formatedDate.replaceAll('/', '')
      organizer[formatedDate] ?
        organizer[formatedDate].push(history):
        organizer[formatedDate] = [ history ]

      return `
        <tr class="${history.partnerFraud ? 'red-text' : '' }">
          <td><span hidden>${history.createdAt}</span>${formatedDate} - ${hours}</td>
          <td>${history.customerOrder}</td>
          <td>${history.customerName}</td>
          <td>${history.partnerName}</td>
          <td>${history.partnerSite}</td>
          <td>${history.templateName}</td>
        </tr>
      `}).join()
    
    return { tBody, organizer }
  },
  mountCardSummary: function(data) {
    const totalByDate = Object.keys(data).reverse()

    return totalByDate.map(item => ` 
      <div class="col s12 m3 L2">
        <div class="card-panel black">
          <p class="center white-text">
            ${item} : ${data[item].length} 
          </p>
        </div>
      </div>
    `).join()
  },
  template: function() {
    if (this._data) {
      const summary = this.summarize()
      const sumUp = this.mountCardSummary(summary.organizer)
      return `
        <div class="row">
          ${sumUp}
        </div>
        <table class="responsive-table striped highlight">
          <thead>
            <tr>
              <th>Data</th>
              <th>Pedido</th>
              <th>Cliente</th>
              <th>Nome do Parceiro</th>
              <th>Site</th>
              <th>Template Selecionada</th>
            </tr>
          </thead>
          <tbody>
            ${summary.tBody}
          </tbody>
        </table>`
    }

    return '<div class="row"><p class="red-text"> Histórico não encontrado <i class="material-icons red-text">error</i></p></div>'
  }
}
