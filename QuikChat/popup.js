document.addEventListener('DOMContentLoaded',function(){
function printMsg(m){
var log=document.getElementById("log");
var msg=document.createElement("li");
msg.innerText=m;
log.appendChild(msg);
log.scrollTop=log.scrollHeight;
document.getElementById("message").value="";
}
function sendMsg(){try{if(document.getElementById("message").value!="")window["socket"].send(document.getElementById("message").value);}catch{printMsg("[Unable to send the message]");}}
var socket,url='wss://IntentionalSatisfiedState.kimplayz4lk.repl.co';
function connect(){
window["socket"]=new WebSocket(url);
window["socket"].addEventListener('open',function(event){printMsg("[Connected to the server]");});
window["socket"].addEventListener('close',function(event){printMsg("[Disconnected from the server, reconnecting in 3 seconds...]");setTimeout(connect,3000);});
window["socket"].addEventListener('error',function(event){printMsg("[Error connecting to the server]");});
window["socket"].addEventListener('message',function(event){printMsg(event.data);});
}
connect();
document.getElementById("send").addEventListener("click",sendMsg);
document.getElementById("message").addEventListener("keyup",function(event){if(event.keyCode==13){event.preventDefault();document.getElementById("send").click();}});
},false);
