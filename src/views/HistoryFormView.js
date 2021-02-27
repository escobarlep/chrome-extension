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
      `}
    ).join('')
    
   

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
    `).join('')
  },
  diff_minutes: function(dt2, dt1) {
    let diff =(dt2.getTime() - dt1.getTime()) / 1000
    diff /= 60
    return Math.abs(Math.round(diff))
  },
  mountCardTma: function(organizer){
    let tma = 0
    const formatedToday = (new Intl.DateTimeFormat('pt-br')).format(new Date())
    if (organizer[formatedToday]) {
      const totalHistoryToday = organizer[formatedToday].length
      if (totalHistoryToday && totalHistoryToday > 0) {
        const latsIndex = totalHistoryToday - 1
        let minRes = organizer[formatedToday][0]
        minRes = new Date(minRes.createdAt)
        let maxRes = organizer[formatedToday][latsIndex]
        maxRes = new Date(maxRes.createdAt)
        let totalWorkMinutes = this.diff_minutes(maxRes, minRes)
        totalWorkMinutes = totalWorkMinutes > 300 ? // If they are working for 5h, discount 1h
          totalWorkMinutes - 60 : // 1h lunch interval
          totalWorkMinutes
        tma = (totalWorkMinutes / totalHistoryToday).toFixed(2).replace('.',':')
      }
    }

    return `
      <div class="col s12 m3 L2">
        <div class="card-panel black">
          <p class="center white-text">
            TMA = ${tma} (Min/Tickets)
          </p>
        </div>
      </div>
    `
  },
  template: function() {
    if (this._data) {
      const summary = this.summarize()
      const sumUp = this.mountCardSummary(summary.organizer)
      const tma = this.mountCardTma(summary.organizer)
      return `
        <div class="row">
          ${tma}
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
