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
    const data = this._repo.getAll()
    this.view.setData(data)
    doc.innerHTML = this.view.template()
  }
}
