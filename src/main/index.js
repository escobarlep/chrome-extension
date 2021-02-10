import App from './App.js'
import MainWindowView from '/src/views/MainWindowView.js'
import TemplateController from '/src/controllers/TemplateController.js'
import UserController from '/src/controllers/UserController.js'
import CustomerController from '/src/controllers/CustomerController.js'
import PartnerController from '/src/controllers/PartnerController.js'

function collectCustomer() {
  window.localStorage.removeItem('app-max-order-status')
  window.localStorage.removeItem('app-max-site')
  var url = window.location.href
    .replace('https://', '')
    .split('/')[0]
  const appMaxRegex = new RegExp('appmax', 'gi')
  var customer = {}

  if (!url || !appMaxRegex.test(url)) return customer
  
  var elementForUser = document.getElementsByClassName('username')
  var text = elementForUser.length ? elementForUser[0].innerText : []
  var searchForNameByIndex = text.lastIndexOf('#')
  var customerNamme = text.slice(0, searchForNameByIndex)
  if (!customerNamme.length) customerNamme = ''
  customer.name = customerNamme.trim()

  var order = ''
  var orderElement = document.getElementsByTagName('H1')
  order = orderElement[0].innerText.slice(8, orderElement[0].length)
  if (order.length !== 7) {
    orderElement = document.getElementsByClassName(' text-right');
    order = orderElement[0].innerText.trim()
    order = order.slice(1)
  }
  customer.order = order ? order.trim() : ''
  
  var moreInfo = document.getElementsByTagName('address')
  moreInfo = moreInfo[1].innerText
  var cpf = moreInfo.slice(0,16)
  customer.cpf = cpf ? cpf.replace('CPF:', '').trim() : ''

  var searchEmailByIndex = moreInfo.lastIndexOf('Telefone')
  var email = moreInfo.slice(17, searchEmailByIndex)
  customer.email = email.replace('E-mail:', '').trim()

  var tracking = document.getElementById('trackingCode')
  customer.tracking = tracking ? tracking.value.trim() : ''
  
  var elementSite = document.querySelectorAll('.box-header.with-border strong')

  if (elementSite.length) {
    var site = elementSite[1].innerText
    site = site ? site.replace('Site:', '').trim() : ''
    window.localStorage.setItem('app-max-site', site)
    var textArea = document.createElement('textArea')
    textArea.type = 'hidden'
    textArea.innerText = site
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
  }

  if (customer.tracking) {
    fetch('https://api-track.ebanx.com/production/track', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        "trackingCode": customer.tracking,
        "locale":"pt"
      })
    })
      .then(res => res.json())
      .then(res => {
        if (!res.length) return 
        var trackingResult = res[0]
        if ( !'checkpoints' in trackingResult ) return
        var { checkpoints } = trackingResult
        if ( !checkpoints.length ) return
        var currentCheckpoint = {}
        checkpoints.forEach(checkpoint => {
          if (!currentCheckpoint.length) {
            currentCheckpoint = checkpoint
          } else {
            var currentDate = new Date(currentCheckpoint.date)
            if (currentDate < (new Date(checkpoint.date))) currentCheckpoint = checkpoint
          }
        })
        var newDate = new Date(currentCheckpoint.date)
        var formatedDate = (new Intl.DateTimeFormat('pt-br')).format(newDate)
        var description = currentCheckpoint.description.replace(/^/, `${formatedDate} - `)
        window.localStorage.setItem('app-max-order-status', description)
      })
      .catch(err => console.log('mail API integration failed', err))
  }

  return customer
}

function collectPartner() {
  var url = window.location.href
    .replace('https://', '')
    .split('/')[0]
  const appMaxRegex = new RegExp('appmax', 'gi')
  var partner = {}

  if (!url || !appMaxRegex.test(url)) return partner
  var trackingStatus = window.localStorage.getItem('app-max-order-status')

  partner.site = window.localStorage.getItem('app-max-site')
  var tbody = document.querySelector('div.box-body div.table-responsive tbody')
  var listTDs = tbody.children[0].children
  partner.name = listTDs[0].innerText
  partner.cnpj = listTDs[4].innerText
  partner.phone = listTDs[6].innerText
  if (partner.site) {
    var suppContact = document.querySelectorAll('.modal-body table tr')
    if (suppContact.length) {
      for (var th of suppContact) {
        var thisSite = th.children[0].innerText
        if (thisSite.trim().toUpperCase() === partner.site.toUpperCase()) {
          partner.email = th.children[2].innerText
        }
      }
    }
  }

  if (!partner.email) partner.email = listTDs[5].innerText

  return { partner, trackingStatus }
}

App.setStorage(window.localStorage)
App.setDocument(window.document)
App.setCssFramework(window.M)
App.initialSetUp()
App.renderView(MainWindowView)

TemplateController.setMainApp(App)
TemplateController.setStorage()
TemplateController.startView()
App.renderView(TemplateController.view)

UserController.initializer(App)
CustomerController.initializer(App, collectCustomer)
PartnerController.initializer(App, collectPartner)

TemplateController.activateButtonForDetail()
