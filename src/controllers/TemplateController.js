import TemplateRepository from '/src/repositories/TemplateRepository.js'
import UserRepository from '/src/repositories/UserRepository.js'
import CustomerRepository from '/src/repositories/CustomerRepository.js'
import PartnerRepository from '/src/repositories/PartnerRepository.js'
import TemplateListView from '/src/views/TemplateListView.js'
import TemplateDetailView from '/src/views/TemplateDetailView.js'

export default {
  _mapKeyWords: new Map(),
  _repository: TemplateRepository,
  _userRepo: UserRepository,
  _customerRepo: CustomerRepository,
  _partnerRepo: PartnerRepository,
  view: TemplateListView,
  viewDetail: TemplateDetailView,
  setMainApp: function(mainApp){
    this.mainApp = mainApp
  },
  startView: function(){
    this.view.setData(this.listAllTemplates())
  },
  setStorage: function(){
    this._repository.setStorage(this.mainApp.storage)
    this._userRepo.setStorage(this.mainApp.storage)
    this._customerRepo.setStorage(this.mainApp.storage)
    this._partnerRepo.setStorage(this.mainApp.storage)
  },
  listAllTemplates: function() {
    const allTempls = this._repository.listAllTemplates()

    return allTempls.map(template => {
      return template
        .replace(this._repository._namePrefix, '')
        .replaceAll('-', ' ')
    })
  },
  showDetail: function(text) {
    this.setStorage(this.mainApp.storage)
    const data = this._repository.getByName(text)
    const template = this.replaceTemplateKeyWords(data)
    this.viewDetail.setData(template)
    this.mainApp.renderView(this.viewDetail)
  },
  replaceTemplateKeyWords: function(data) {
    this.updateData()
    let template = data.content

    data.requiredFields.forEach(field => {
      const toReplace = this._mapKeyWords.get(field)
      if (field === 'KEY_WORD_CUSTOMER_STATUSTRACKING') template = template.replaceAll(field, this._mapKeyWords.get(field))
      if (toReplace) template = template.replaceAll(field, this._mapKeyWords.get(field))
    })
    return template
  },
  trackingStatusMessage: function(status) {
    // Needed for email identation issues. I should probably solve it :D
    return `
Verifiquei que a última atualização apresentaa no site foi: ${status}
`
  },
  updateData: function() {
    const customer = this._customerRepo.getCustomer()
    const customerFirstName = customer.name.split(' ')[0]
    const partner = this._partnerRepo.getPartner()

    const trackingStatus = customer.trackingStatus ?
      this.trackingStatusMessage(customer.trackingStatus) :
      customer.trackingStatus

    this._mapKeyWords.set('KEY_WORD_USER_NAME', this._userRepo.getName())
    this._mapKeyWords.set('KEY_WORD_PARTNER_PHONE', partner.phone)
    this._mapKeyWords.set('KEY_WORD_PARTNER_SITE', partner.site)
    this._mapKeyWords.set('KEY_WORD_PARTNER_EMAIL', partner.email)
    this._mapKeyWords.set('KEY_WORD_PARTNER_NAME', partner.name)
    this._mapKeyWords.set('KEY_WORD_PARTNER_CNPJ', partner.cnpj)
    this._mapKeyWords.set('KEY_WORD_CUSTOMER_FIRSTNAME', customerFirstName)
    this._mapKeyWords.set('KEY_WORD_CUSTOMER_FULLNAME', customer.name)
    this._mapKeyWords.set('KEY_WORD_CUSTOMER_CPF', customer.cpf)
    this._mapKeyWords.set('KEY_WORD_CUSTOMER_EMAIL', customer.email)
    this._mapKeyWords.set('KEY_WORD_CUSTOMER_ORDER', customer.order)
    this._mapKeyWords.set('KEY_WORD_CUSTOMER_TRACKING', customer.tracking)
    this._mapKeyWords.set('KEY_WORD_CUSTOMER_STATUSTRACKING', trackingStatus)
  },
  activateButtonForDetail: function() {
    const templateButtons = this.mainApp.document.querySelectorAll('.find-template')
    const bindedCall = this.showDetail.bind(this) 
    for (let button of templateButtons) {
      button.addEventListener('click', function(){
        bindedCall(button.innerText)
      })
    }
  },
}
