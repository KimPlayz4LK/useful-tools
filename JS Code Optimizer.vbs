Set fso=CreateObject("Scripting.FileSystemObject")
removeComments=msgbox("Would you like to remove comments?",36,"JS Code Optimizer")
removeDoubleSpaces=msgbox("Would you like to double spaces?",36,"JS Code Optimizer")
content=""
Set f=fso.OpenTextFile(WScript.Arguments(0),1)
Do Until f.AtEndOfStream
line=f.ReadLine

if removeComments=vbYes then
if inStr(line,"//") then
line=Left(line,inStr(line,"//")-1)
end if
end if
if removeComments=vbYes then
if inStr(line,"  ") then
line=Replace(line,"  ","")
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

content=content&line&vbCrLf
Loop
f.Close
Set f=fso.OpenTextFile(WScript.Arguments(0),2)
f.write(content)
f.Close
x=msgbox("Code optimized!",64,"JS Code Optimizer")