import TicketRepository from '/src/repositories/TicketRepository.js'
import HistoryFormView from '/src/views/HistoryFormView.js'

export default {
  _repo: TicketRepository,
  view: HistoryFormView,
  initializer: function(storage, document){
    this.setStorage(storage)
    this.document = document
    this.updateView()
  },
  setStorage: function (storage) {
    this._repo.setStorage(storage)
  },
  updateView: function() {
    const doc = this.document.getElementById(this.view.id)
    this.view.setData(this.summarize())
    this.view.setTmaCalc(this.tmaCalc.bind(this))
    doc.innerHTML = this.view.template()
  },
  summarize: function() {
    const organizer = []
    const data = this._repo.getAll()
    data.forEach(history => {
      const newDate = new Date(history.createdAt)
      const hours = newDate.toTimeString().split(' ')[0]
      const formatedDate = (new Intl.DateTimeFormat('pt-br')).format(newDate)
      history.formatedDate = `${formatedDate} - ${hours}`
      organizer[formatedDate] ?
        organizer[formatedDate].push(history):
        organizer[formatedDate] = [ history ]
    })
    return organizer
  },
  diff_minutes: function(dt2, dt1) {
    let diff =(dt2.getTime() - dt1.getTime()) / 1000
    diff /= 60
    return Math.abs(Math.round(diff))
  },
  tmaCalc: function(history, date){
    let tma = '0:00'
    const totalHistoryToday = history[date].length
    if (totalHistoryToday && totalHistoryToday > 0) {
      const latsIndex = totalHistoryToday - 1
      let minRes = history[date][0]
      minRes = new Date(minRes.createdAt)
      let maxRes = history[date][latsIndex]
      maxRes = new Date(maxRes.createdAt)
      let totalWorkMinutes = this.diff_minutes(maxRes, minRes)
      totalWorkMinutes = totalWorkMinutes > 300 ? // If they are working for 5h, discount 1h
        totalWorkMinutes - 60 : // 1h lunch interval
        totalWorkMinutes
      tma = (totalWorkMinutes / totalHistoryToday).toFixed(2).replace('.',':')
    }

    return tma
  },
}
