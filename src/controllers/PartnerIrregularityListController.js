import PartnerIrregularityListRepository from '/src/repositories/PartnerIrregularityListRepository.js'
import PartnerIrregularityListView from '/src/views/PartnerIrregularityListView.js'

export default {
  _repo: PartnerIrregularityListRepository,
  view: PartnerIrregularityListView,
  initializer: function(window){
    this.setStorage(window.localStorage)
    this.document = window.document
    this.updateView()
  },
  setStorage: function (storage) {
    this._repo.setStorage(storage)
  },
  setDocument: function (doc) {
    this.document = doc
  },
  updateView: function() {
    const doc = this.document.getElementById(this.view.id)
    const listFunds = this._repo.getNoFundsList()
    const listFraud = this._repo.getFraudList()
    this.view.setData({noFunds: listFunds, fraud: listFraud})
    doc.innerHTML = this.view.template()
    this._activateViewListeners()
  },
  updateFraudList: function() {
    const doc = this.document.getElementById(this.view.idFraudListField)
    if (!doc) throw new Error('Elemento de lista de Fraudes não encontrado')
    let list = doc.value.split('\n')
    if (list) {
      list = list.map(l => l.trim().toLowerCase())
      this._repo.saveFraudList(list)
    }
    this.updateView()
  },
  updateNoFundsList: function() {
    const doc = this.document.getElementById(this.view.idNoFundsListField)
    if (!doc) throw new Error('Elemento de lista de Negativados não encontrado')
    let list = doc.value.split('\n')
    if (list) {
      list = list.map(l => l.trim().toLowerCase())
      this._repo.saveNoFundsList(list)
    }
    this.updateView()
  },
  isPartnerListedAsNoFunds: function(partner){
    const list = this._repo.getNoFundsList()
    if(!list) return false
    if(!partner || !partner.name) return false
    return !!list.find(name => name === partner.name.trim().toLowerCase())
  },
  isPartnerListedAsFraud: function(partner){
    const list = this._repo.getFraudList()
    if(!list) return false
    if(!partner || !partner.name) return false
    return !!list.find(name => name === partner.name.trim().toLowerCase())
  },
  _activateViewListeners: function(){
    const btnImportFraud = this.document.getElementById(this.view.idFraudListUpdate)
    const bindedCallImportFraud = this.updateFraudList.bind(this)
    btnImportFraud.addEventListener('click', function() {
      bindedCallImportFraud()
    })
    const btnImportNoFunds = this.document.getElementById(this.view.idNoFundsListUpdate)
    const bindedCallImportNoFunds = this.updateNoFundsList.bind(this)
    btnImportNoFunds.addEventListener('click', function() {
      bindedCallImportNoFunds()
    })
  }
}
