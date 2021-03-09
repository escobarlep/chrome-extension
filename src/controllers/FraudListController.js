import FraudListRepository from '/src/repositories/FraudListRepository.js'
import FraudListView from '/src/views/FraudListView.js'

export default {
  _repo: FraudListRepository,
  view: FraudListView,
  initializer: function(window){
    this.setStorage(window.localStorage)
    this.document = window.document
    this.updateView()
  },
  setStorage: function (storage) {
    this._repo.setStorage(storage)
  },
  updateView: function() {
    const doc = this.document.getElementById(this.view.id)
    doc.innerHTML = this.view.template()
    this._activateViewListeners()
  },
  updateFraudList: function() {
    const doc = this.document.getElementById(this.view.idFraudListField)
    console.log(doc)
    if (!doc) throw new Error('Elemento de lista de Fraudes não encontrado')
    let list = doc.value.split('\n')
    if (list) {
      list = list.map(l => l.trim().toLowerCase())
      this._repo.save(list)
    }
    this.document.getElementById(this.view.id).innerHTML = JSON.stringify(list)
  },
  _activateViewListeners: function(){
    const btnImportFraud = this.document.getElementById(this.view.idFraudListUpdate)
    const bindedCallImportFraud = this.updateFraudList.bind(this)
    btnImportFraud.addEventListener('click', function() {
      bindedCallImportFraud()
    })
  }
}
