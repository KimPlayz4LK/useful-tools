Set fso=CreateObject("Scripting.FileSystemObject")
removeComments=msgbox("Would you like to remove comments?",36,"JS Code Optimizer")
removeDoubleSpaces=msgbox("Would you like to remove double spaces?",36,"JS Code Optimizer")
removeEmpty=msgbox("Would you like to remove empty lines?",36,"JS Code Optimizer")
content=""
Set f=fso.OpenTextFile(WScript.Arguments(0),1)
Do Until f.AtEndOfStream
dontAdd=false
line=f.ReadLine
if removeComments=vbYes then
if inStr(line,"//") then
line=Left(line,inStr(line,"//")-1)
end if
end if
if removeDoubleSpaces=vbYes then
if inStr(line,"  ") then
line=Replace(line,"  ","")
end if
end if
if removeEmpty=vbYes then
if line="" then
dontAdd=true
end if
end if
if inStr(line,", ") then
line=Replace(line,", ",",")
end if
if inStr(line," {") then
line=Replace(line," {","{")
end if
if inStr(line," (") then
line=Replace(line," (","(")
end if
if inStr(line,") ") then
line=Replace(line,") ",")")
end if
if inStr(line," = ") then
line=Replace(line," = ","=")
end if
if inStr(line," - ") then
line=Replace(line," - ","-")
end if
if inStr(line," + ") then
line=Replace(line," + ","+")
end if
if inStr(line," - ") then
line=Replace(line," - ","-")
end if

if dontAdd=false then
content=content&line&vbCrLf
end if
Loop
f.Close
Set f=fso.OpenTextFile(WScript.Arguments(0),2)
f.write(content)
f.Close
x=msgbox("Code optimized!",64,"JS Code Optimizer")