console.log('customerNamme')
var port = chrome.runtime.connect({name: "knockknock"});
port.postMessage({joke: "Knock knock"});
port.onMessage.addListener(function(msg) {
  if (msg.question == "Who's there?")
    port.postMessage({answer: "Madame"});
  else if (msg.question == "Madame who?")
    port.postMessage({answer: "Madame... Bovary"});
});

// chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
//   console.log('customerNamme-------')
//   var elementForUser = document.getElementsByClassName('username')
//   var text = elementForUser[0].innerText
//   var searchForNameByIndex = text.lastIndexOf('#')
//   let customerNamme = text.slice(0, searchForNameByIndex)
//   if (!customerNamme.length) customerNamme = ''
//   customerNamme = customerNamme.trim()
//   console.log(customerNamme)
//   if (msg.text === 'report_customer') {
//     console.log(msg)
//   }
//   sendResponse('customerNamme')
// });
//  
//  console.log('customerNamme-------')
//  var elementForUser = document.getElementsByClassName('username')
//  var text = elementForUser[0].innerText
//  var searchForNameByIndex = text.lastIndexOf('#')
//  let customerNamme = text.slice(0, searchForNameByIndex)
//  if (!customerNamme.length) customerNamme = ''
//  customerNamme = customerNamme.trim()
//  console.log(customerNamme)
//  
//  chrome.runtime.sendMessage({name: customerNamme}, function(response) {
//    
//    console.log(response.farewell);
//  });