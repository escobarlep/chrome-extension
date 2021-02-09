//  chrome.browserAction.onClicked.addListener(function (tab) {
//    window.localStorage.setItem('aaw2', 1)
//  })
//  chrome.browserAction.onClicked.addListener(tab => {
//    window.localStorage.setItem('ccc', 2)
//  })
//  window.localStorage.setItem('ddd', 3)

//  
//  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//    var port = chrome.tabs.connect(tabs[0].id, {name: "knockknock"});
//    port.postMessage({joke: "Knock knock"});
//    port.onMessage.addListener(function(msg) {
//      if (msg.question == "Who's there?")
//        port.postMessage({answer: "Madame"});
//      else if (msg.question == "Madame who?")
//        port.postMessage({answer: "Madame... Bovary"});
//    });
//  });