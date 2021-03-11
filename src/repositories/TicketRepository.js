const History = {
  customerName: '',
  customerOrder: '',
  customerOrderUrl: '',
  customerCollectedAt: '',
  partnerName: '',
  partnerSite: '',
  partnerObs: '',
  partnerFraud: '',
  partnerCollectedAt: '',
  templateId: '',
  templateName: '',
  templateCopiedAt: '',
  createdAt: ''
}

export default {
  _prefix: 'app-max-history',

  setStorage: function(storage) {
    this.storage = storage
  },
  getAll: function() {
    const result = this.storage.getItem(this.getPrefix())
    if (result) return JSON.parse(result)
    return false
  },
  save: function(data) {
    this.storage.setItem(this.getPrefix(), JSON.stringify(data))
  },
  add: function(data) {
    if (!data) return false
    //if (!data.customer || !data.partner) return false

    const historyDTO = {
      type: data.type,
      customerName: data.customer.name,
      customerOrder: data.customer.order,
      customerOrderUrl: data.customer.orderUrl,
      customerCollectedAt: data.customer.date,
      partnerName: data.partner.name,
      partnerSite: data.partner.site,
      partnerObs: data.partner.obs,
      partnerFraud: data.partner.isFraud,
      partnerCollectedAt: data.partner.date,
      templateName: data.template ? data.template.id : '',
      templateName: data.template ? data.template.name : '',
      templateCopiedAt: data.template ? data.template.date : '',
      createdAt: new Date()
    }
    let history = this.getAll()
    if (history) history.push(historyDTO)
    else history = [ historyDTO ]
    this.save(history)
  },
  getPrefix: function() {
    return this._prefix
  }
}
