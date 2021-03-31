chrome.tabs.query({active:true},function(tabs){
var tab=tabs[0];
chrome.tabs.executeScript(tab.id,{code:'location.replace("javascript:x__newDraggable();")'});
});