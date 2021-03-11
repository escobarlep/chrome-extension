const History = {
  customer: {},
  partner: {},
  template: {},
  complexity: '',
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
  preSave: function(data) {
    if (data.partner) {
      if (data.partner.email) delete data.partner.email
      if (data.partner.cnpj) delete data.partner.cnpj
      if (data.partner.phone) delete data.partner.phone
    }
    if (data.customer) {
      if (data.customer.email) delete data.customer.email
      if (data.customer.cpf) delete data.customer.cpf
      if (data.customer.phone) delete data.customer.phone
    }
  },
  add: function(data) {
    if (!data) return false
    //if (!data.customer || !data.partner) return false
    this.preSave(data)
    const newDate = new Date()
    const hours = newDate.toTimeString().split(' ')[0]
    const formatedDate = (new Intl.DateTimeFormat('pt-br')).format(newDate)
      
    const historyDTO = {
      ...data,
      formatedDate: `${formatedDate} - ${hours}`,
      createdAt: newDate
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
