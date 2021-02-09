console.log('customerNamme')
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  console.log('customerNamme-------')
  var elementForUser = document.getElementsByClassName('username')
  var text = elementForUser[0].innerText
  var searchForNameByIndex = text.lastIndexOf('#')
  let customerNamme = text.slice(0, searchForNameByIndex)
  if (!customerNamme.length) customerNamme = ''
  customerNamme = customerNamme.trim()
  console.log(customerNamme)
  if (msg.text === 'report_customer') {
    console.log(msg)
  }
  sendResponse('customerNamme')
});