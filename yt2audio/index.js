const fs=require("fs");
const WebSocket=require('ws');
const http=require("http");
const path=require("path");
const ytdl=require('ytdl-core');
const wss=new WebSocket.Server({port:44234});

wss.on('connection',async(ws,req)=>{
ws.on('message',async(data)=>{
var data=JSON.parse(data);
if(data.type=="download"){console.log(`Download request: ${data.url}`);await download(data.url,ws);}
});
});
async function download(link,ws){
let info=await ytdl.getInfo(link);
var title=info.videoDetails.title.replace(/[\/:*?"<>|]/g,"").replace(/  /g," ").replace(/  /g," ");
await ytdl(link).pipe(fs.createWriteStream(`./Downloads/${title}.mp3`));
var filepath=await path.resolve(`./Downloads/${title}.mp3`);
console.log(`Downloaded as ${filepath}`);
require('child_process').exec(`explorer.exe /select,"${filepath}"`);
return filepath;
}