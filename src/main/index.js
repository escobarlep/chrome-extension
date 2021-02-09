import App from './App.js'
import MainWindowView from '/src/views/MainWindowView.js'
import TemplateController from '/src/controllers/TemplateController.js'
import UserController from '/src/controllers/UserController.js'
import CustomerController from '/src/controllers/CustomerController.js'
import PartnerController from '/src/controllers/PartnerController.js'

function collectCustomer() {
  var url = window.location.href
    .replace('https://', '')
    .split('/')[0]
  var route = window.location.href
    .replace('https://', '')
    .split('/')[1]
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
  console.log(order)
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
  console.log(customer)
  
  var elementSite = document.querySelectorAll('.box-header.with-border strong')

  if (elementSite.length) {
    var site = elementSite[1].innerText
    site = site ? site.replace('Site:', '').trim() : ''
    window.localStorage.setItem('app-max-site', site)
  }

  return customer
}

function collectPartner() {
  var site = window.localStorage.getItem('app-max-site')
  var tbody = document.querySelector('div.box-body div.table-responsive tbody')
  var listTDs = tbody.children[0].children
  var name = listTDs[0].innerText
  var cnpj = listTDs[4].innerText
  var phone = listTDs[6].innerText
  var email
  if (site) {
    var suppContact = document.querySelectorAll('.modal-body table tr')
    if (suppContact.length) {
      for (var th of suppContact) {
        var thisSite = th.children[0].innerText
        if (thisSite.trim().toUpperCase() === site.toUpperCase()) {
          email = th.children[2].innerText
        }
      }
    }
  }

  if (!email) email = listTDs[5].innerText

  return { name, cnpj, phone, email, site}
}

App.setStorage(window.localStorage)
App.setDocument(window.document)
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
