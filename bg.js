chrome.browserAction.onClicked.addListener(function(tab) {
  //chrome.tabs.executeScript({ file: 'changeCSS.js'});// last resort
  chrome.tabs.insertCSS({file: 'mystyles.css'}); // proper way
});