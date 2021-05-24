import App from './App.js'
import MainWindowController from '/src/controllers/MainWindowController.js'
import TemplateController from '/src/controllers/TemplateController.js'
import UserController from '/src/controllers/UserController.js'
import CustomerController from '/src/controllers/CustomerController.js'
import PartnerController from '/src/controllers/PartnerController.js'
import TicketController from '/src/controllers/TicketController.js'


function collectCustomer() {

  var fullUrl = window.location.href
    .replace('https://', '')
    .split('/')
  var url = fullUrl[0]
  var domain = fullUrl[1]
  const appMaxUrl = new RegExp('appmax', 'gi')
  const appMaxCustomerDomain = new RegExp('order', 'gi')
  if (!url || !appMaxUrl.test(url) || !appMaxCustomerDomain.test(domain)) return false

  window.localStorage.removeItem('app-max-order-status')
  window.localStorage.removeItem('app-max-site')
  var customer = {}
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
  customer.orderUrl = window.location.href

  var moreInfo = document.getElementsByTagName('address')
  moreInfo = moreInfo[1].innerText
  var cpf = moreInfo.slice(0,16)
  customer.cpf = cpf ? cpf.replace('CPF:', '').trim() : ''

  var searchEmailByIndex = moreInfo.lastIndexOf('Telefone')
  var email = moreInfo.slice(17, searchEmailByIndex)
  customer.email = email.replace('E-mail:', '').trim()

  var tracking = document.getElementById('trackingCode')
  customer.tracking = tracking ? tracking.value.trim() : ''

  var elementPartner = document.querySelectorAll('.box-header.with-border strong')
  if (elementPartner.length) {
    var completString = elementPartner[1].innerText
    var hasMultipleInfo = completString && completString.split('|').length
    var splitedString = hasMultipleInfo ? completString.split('|') : ['','']
    var site = splitedString[0].replace('Site:', '').trim()
    var partnerName = splitedString[1].replace('Empresa:', '').trim()
    window.localStorage.setItem('app-max-site', site)
    var textArea = document.createElement('textArea')
    textArea.type = 'hidden'
    textArea.innerText = partnerName
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
  }

  if (customer.tracking) {
    window.open(`https://t.17track.net/pt#nums=${customer.tracking}`)
    // fetch('https://api-track.ebanx.com/production/track', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json; charset=utf-8'
    //   },
    //   body: JSON.stringify({
    //     "trackingCode": customer.tracking,
    //     "locale":"pt"
    //   })
    // })
    //   .then(res => res.json())
    //   .then(res => {
    //     if (!res.length) return
    //     var trackingResult = res[0]
    //     if ( !'checkpoints' in trackingResult ) return
    //     var { checkpoints } = trackingResult
    //     if ( !checkpoints.length ) return
    //     var currentCheckpoint = {}
    //     checkpoints.forEach(checkpoint => {
    //       if (!currentCheckpoint.length) {
    //         currentCheckpoint = checkpoint
    //       } else {
    //         var currentDate = new Date(currentCheckpoint.date)
    //         if (currentDate < (new Date(checkpoint.date))) currentCheckpoint = checkpoint
    //       }
    //     })
    //     var newDate = new Date(currentCheckpoint.date)
    //     var formatedDate = (new Intl.DateTimeFormat('pt-br')).format(newDate)
    //     var description = currentCheckpoint.description.replace(/^/, `${formatedDate} - `)
    //     window.localStorage.setItem('app-max-order-status', description)
    //   })
    //   .catch(err => console.log('mail API integration failed', err))
  }

  return customer
}

function collectPartner() {
  var fullUrl = window.location.href
    .replace('https://', '')
    .split('/')
  var url = fullUrl[0]
  var domain = fullUrl[1]
  const appMaxUrl = new RegExp('appmax', 'gi')
  const appMaxPartnerDomain = new RegExp('companies', 'gi')

  if (!url || !appMaxUrl.test(url) || !appMaxPartnerDomain.test(domain)) return false
  var partner = {}
  partner.site = window.localStorage.getItem('app-max-site')
  partner.site = partner.site ? partner.site : ''
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

  return partner
}

function getTrackingData() {
  var trackingStatus = window.localStorage.getItem('app-max-order-status')
  if (!trackingStatus) return false
  return { trackingStatus }
}

function getCurrentURL() {
  return window.location.href
}

App.setStorage(window.localStorage)
App.setDocument(window.document)
App.setWindow(window)
App.setCssFramework(window.M)
App.bootstrap()
MainWindowController.initializer(App)
UserController.initializer(App)
CustomerController.initializer(App, { collectCustomer, getTrackingData })
PartnerController.initializer(App, { collectPartner, getCurrentURL })
TemplateController.initializer(App)
TicketController.initializer(App)
