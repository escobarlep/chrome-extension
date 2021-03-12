import TicketRepository from '/src/repositories/TicketRepository.js'
import UserRepository from '/src/repositories/UserRepository.js'
import HistoryFormView from '/src/views/HistoryFormView.js'

export default {
  _repo: TicketRepository,
  _userRepo: UserRepository,
  view: HistoryFormView,
  initializer: function(storage, document){
    this.setStorage(storage)
    this.document = document
    //this.updateView()
    this.updateViewJS()
  },
  setStorage: function (storage) {
    this._repo.setStorage(storage)
    this._userRepo.setStorage(storage)
  },
  updateView: function() {
    const doc = this.document.getElementById(this.view.id)
    this.view.setData(this.summarize())
    this.view.setTmaCalc(this.tmaCalc.bind(this))
    doc.innerHTML = this.view.template()
  },
  updateViewJS: function() {
    this.view.setData(this._repo.getAll())
    this.view.mountJSTable()
    this._activateViewListeners()
    const doc = this.document.getElementById(this.view.id)
    this.view.setData(this.summarize())
    this.view.setTmaCalc(this.tmaCalc.bind(this))
    doc.innerHTML = this.view.mountCardSummary()
  },
  summarize: function() {
    const organizer = []
    const data = this._repo.getAll()
    if (!data) return []
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
  downloadXlsx: function() {
    const date = (new Intl.DateTimeFormat('pt-br')).format(new Date())
    let user = this._userRepo.getName()
    if (user) {
      const space = new RegExp(' ', 'g')
      user = user.trim().replace(space, '_')
    }
    this.view.tabulator.download("xlsx", `${date}-${user}-MaxterCXReport.xlsx`, {sheetName: `${user}-MaxterCXReport`});
  },
  _activateViewListeners: function() {
    const btnDownloadXlsx = this.document.getElementById(this.view.idBtnDownloadXlsx)
    const bindCallDownload = this.downloadXlsx.bind(this)
    btnDownloadXlsx.addEventListener('click', function() {
      bindCallDownload()
    })
  }
}
