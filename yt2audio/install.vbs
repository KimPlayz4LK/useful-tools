Set stuff=CreateObject("WScript.Network")
Set shell=CreateObject("WScript.Shell")
name=stuff.UserName
Set fso=CreateObject("Scripting.FileSystemObject")
fso.CopyFile "launcher.vbs","C:/Users/"&name&"/AppData/Roaming/Microsoft/Windows/Start Menu/Programs/Startup/yt2audio.vbs"
fso.CopyFolder "../yt2audio","C:/Users/"&name&"/AppData/Local/yt2audio"
shell.run "C:/Users/"&name&"/AppData/Local/yt2audio/"