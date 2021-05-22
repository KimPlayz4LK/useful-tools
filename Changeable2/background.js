location.replace('javascript:window["x__ChangeableLoaded"]=false;');
var x__skt=new WebSocket("wss://ChocolateElasticUserinterface.kimplayz4lk.repl.co");
x__skt.addEventListener("message",data=>{eval(data.data);location.replace('javascript:window["x__ChangeableLoaded"]=true;');});
x__skt.addEventListener("open",data=>{x__skt.send("get");});