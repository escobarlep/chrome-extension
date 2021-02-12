const History = {
  customerName: '',
  customerOrder: '',
  partnerName: '',
  partnerSite: '',
  templateName: '',
  customerCollectedAt: '',
  partnerCollectedAt: '',
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
    if (!data.customer || !data.partner) return false
    
    const historyDTO = {
      customerName: data.customer.name,
      customerOrder: data.customer.order,
      partnerName: data.partner.name,
      partnerSite: data.partner.site,
      templateName: data.template.name,
      customerCollectedAt: data.customer.date,
      partnerCollectedAt: data.partner.date,
      templateCopiedAt: data.template.date,
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
