---
title: Hydra Password Cracking Guide
publishedOn: January 1, 2023
slug: "hydra-password-cracking"
excerpt: A guide on using Hydra for cracking passwords accross multiple protocols. I am also going to go into some tricks I've picked up along the way while using Hydra. After this article, You should be able to crack passwords on any protocol that Hydra supports on your given OS. You'll be able to debug and handle common  errors easily. 
readingTime: 4 mins
---

# **What is Hydra?**

Hydra is a powerful and versatile tool that is used for performing password cracking and brute-force attacks on various protocols and services. It can be used to crack login credentials for various services such as SSH, FTP, Telnet, and more. In this article, we will take a closer look at what Hydra is, how it works, and some of the best practices for using it. We will also explore some real-world examples of how this tool can be used to test the security of your own systems and networks. Whether you are a pentester, a security professional, or just someone who is interested in learning more about password cracking and security, this article will provide a comprehensive introduction to the capabilities and potential of the Hydra tool. I aim to answer some of the questions I had when first using Hydra because I don't often see things covered like resuming a scan or debugging in guides.

----------------------------------

# **Installing**

Depending on what package manager you have on your system you will install it differently. Another way is to just clone the repository and I find this method I learn the best. I get a chance to look around the file structure and see at a minimum a bit of how this programs work, where/what it's executables are, and peek at things like xHydra or Hydra GTK. 

`git clone https://github.com/vanhauser-thc/thc-hydra.git`

`cd thc-hydra`

`./configure`

`make`

`make install`

One Liner

`git clone https://github.com/vanhauser-thc/thc-hydra.git && cd thc-hydra && ./configure && make && make install`

Alternative using Docker

`docker pull vanhauser/hydra`

----------------------------------
# **What Can Hydra Crack?**
 **Supported services: adam6500 asterisk cisco cisco-enable cobaltstrike cvs ftp[s] http[s]-{head|get|post} http[s]-{get|post}-form http-proxy http-proxy-urlenum icq imap[s] irc ldap2[s] ldap3[-{cram|digest}md5][s] mssql mysql nntp oracle-listener oracle-sid pcanywhere pcnfs pop3[s] redis rexec rlogin rpcap rsh rtsp s7-300 sip smb smtp[s] smtp-enum snmp socks5 ssh sshkey teamspeak telnet[s] vmauthd vnc xmpp**
# **Usage**

Hydra is pretty simple to use.

If we just call hydra, we get the generally help page that docuements all the protocols they allow and some general usage examples. You can find more info on any one module by...

`hydra -U http-get`

or

`hydra -U mysql`

Will give you more info one those modules and how to use them but I still found their documentation limited as these tools typically are.
 
## **The most detailed help menu you can find for hydra is this command below. There is no manpage.** 👉🏻`hydra -hh`


        Syntax: hydra [[[-l LOGIN|-L FILE] [-p PASS|-P FILE]] | [-C FILE]] [-e nsr] [-o FILE] [-t TASKS] [-M FILE [-T TASKS]] [-w TIME] [-W TIME] [-f] [-s PORT] [-x MIN:MAX:CHARSET] [-c TIME] [-ISOuvVd46] [-m MODULE_OPT] [service://server[:PORT][/OPT]]

        Options:
          -R        restore a previous aborted/crashed session
          -I        ignore an existing restore file (don't wait 10 seconds)
          -S        perform an SSL connect
          -s PORT   if the service is on a different default port, define it here
          -l LOGIN or -L FILE  login with LOGIN name, or load several logins from FILE
          -p PASS  or -P FILE  try password PASS, or load several passwords from FILE
          -x MIN:MAX:CHARSET  password bruteforce generation, type "-x -h" to get help
          -y        disable use of symbols in bruteforce, see above
          -r        use a non-random shuffling method for option -x
          -e nsr    try "n" null password, "s" login as pass and/or "r" reversed login
          -u        loop around users, not passwords (effective! implied with -x)
          -C FILE   colon separated "login:pass" format, instead of -L/-P options
          -M FILE   list of servers to attack, one entry per line, ':' to specify port
          -o FILE   write found login/password pairs to FILE instead of stdout
          -b FORMAT specify the format for the -o FILE: text(default), json, jsonv1
          -f / -F   exit when a login/pass pair is found (-M: -f per host, -F global)
          -t TASKS  run TASKS number of connects in parallel per target (default: 16)
          -T TASKS  run TASKS connects in parallel overall (for -M, default: 64)
          -w / -W TIME  wait time for a response (32) / between connects per thread (0)
          -c TIME   wait time per login attempt over all threads (enforces -t 1)
          -4 / -6   use IPv4 (default) / IPv6 addresses (put always in [] also in -M)
          -v / -V / -d  verbose mode / show login+pass for each attempt / debug mode 
          -O        use old SSL v2 and v3
          -K        do not redo failed attempts (good for -M mass scanning)
          -q        do not print messages about connection errors
          -U        service module usage details
          -m OPT    options specific for a module, see -U output for information
          -h        more command line options (COMPLETE HELP)
          server    the target: DNS, IP or 192.168.0.0/24 (this OR the -M option)
          service   the service to crack (see below for supported protocols)
          OPT       some service modules support additional input (-U for module help)

        **Supported services: adam6500 asterisk cisco cisco-enable cobaltstrike cvs ftp[s] http[s]-{head|get|post} http[s]-{get|post}-form http-proxy http-proxy-urlenum icq imap[s] irc ldap2[s] ldap3[-{cram|digest}md5][s] mssql mysql nntp oracle-listener oracle-sid pcanywhere pcnfs pop3[s] redis rexec rlogin rpcap rsh rtsp s7-300 sip smb smtp[s] smtp-enum snmp socks5 ssh sshkey teamspeak telnet[s] vmauthd vnc xmpp**

        Hydra is a tool to guess/crack valid login/password pairs.
        Licensed under AGPL v3.0. The newest version is always available at;
        https://github.com/vanhauser-thc/thc-hydra
        Please don't use in military or secret service organizations, or for illegal
        purposes. (This is a wish and non-binding - most such people do not care about
        laws and ethics anyway - and tell themselves they are one of the good ones.)
        These services were not compiled in: afp firebird memcached mongodb ncp oracle postgres radmin2 rdp sapr3 svn smb2.

        Use HYDRA_PROXY_HTTP or HYDRA_PROXY environment variables for a proxy setup.
        E.g. % export HYDRA_PROXY=socks5://l:p@127.0.0.1:9150 (or: socks4:// connect://)
            % export HYDRA_PROXY=connect_and_socks_proxylist.txt  (up to 64 entries)
            % export HYDRA_PROXY_HTTP=http://login:pass@proxy:8080
            % export HYDRA_PROXY_HTTP=proxylist.txt  (up to 64 entries)

        Examples:
          hydra -l user -P passlist.txt ftp://192.168.0.1
          hydra -L userlist.txt -p defaultpw imap://192.168.0.1/PLAIN
          hydra -C defaults.txt -6 pop3s://[2001:db8::1]:143/TLS:DIGEST-MD5
          hydra -l admin -p password ftp://[192.168.0.0/24]/
          hydra -L logins.txt -P pws.txt -M targets.txt ssh

----------------------------------

## **We see a complete list of options. You can set an enviroment varibale to use Hydra over a proxy. I prefer proxychains.** 

----------------------------------
***There are two types of syntax Hydra will accept, I'm only going to cover one.***

## ***Hydra forces you to use all the switches prior to declaring the module. All of the modules can be called like this.***

`hydra -l mysql -p mysql mysql://hostOrIpHere`

# Let's look the important ones
Typically you need to add a wordlist for both user and passwords. I want to point a few switches/flags out I find most helpful. 
- -t is run TASKS number of connects in parallel per target (default: 16)
- -T is run TASKS connects in parallel overall (for -M, default: 64).

This will speed up you sessions with more tasks.

- -f / -F   exit when a login/pass pair is found (-M: -f per host, -F global)

This is going to help you stop the session as soon as a combination is found, either globally or per host.

- -x MIN:MAX:CHARSET  password bruteforce generation, type "-x -h" to get help

 This allows you to brute force passwords, as opposed to a word list. Keep in mind, Hydra will not run the session if it think's the length it would take to crack the password is unreasonable. That's one reason that for a pure brute force, I'd rather run my own Python script. I don't care if it says 10 years, that's an assumption without accounting for luck and assuming the entire thing needed to run. I just don't use Hydra for a real brute force attempt.

- -R will resume scans. 
  
**Very important.** 👆🏻 You will not be able to run some of these lists in one sitting. Hydra when you CTRL + C your session saves a hydra.restore file in the working directory. That file allows you to restore sessions where you left off.

- -e nsr    
 
 I always throw  👆🏻 this in good good measure. -e stipulates it try a few different thing depending on what letters you add after it. They break down like this. 'n' = try null password, "s" = try username as password and/or "r" reversed login. You can add one, or all 3. -e=sn or -e nsr or any combo

----------------------------------
# **Recources** 
You will need wordlists. SecLists is a great starting point.

`git clone https://github.com/danielmiessler/SecLists.git`

If you are low on space, this is a bit smaller. 

`git clone --depth 1 https://github.com/danielmiessler/SecLists.git`

----------------------------------
## **Cracking Usage**

So now let's see some of this in use. I'll try to give as many examples for common uses.

`hydra -d -l root -p root mysql://<host>`

-d is for debugging and gives a ton of output but you see 100% of what is happening behind the scenes(Every request in full). 

`hydra -v -L myUserList.txt -P rockyou.txt mysql://<host> `

-v is the verbosity I usually use. You can also use -V to see every combination tried but I prefer the -v bc it has limited output but more information than normal.

----------------------------------

## **Let's add more**

`hydra -L myList.txt -P rockyou.txt -e nsr -F -T64 http-get://<host>/uploadPath:F=Wrong Password`


Breaking this down, the -L flag specifies a list of users, as opposed to the -l flag which specifies a single username. The -P and -p flags are the same, and are used to specify a list of passwords or a single password. The -e nsr flag adds options for trying a null password, using the login as the password, and reversing the login. The -F flag will stop the attack when a working combination is found. The -T64 flag increases the number of tasks that can be run simultaneously, making the attack faster. The http-get module is usually used for servers, and the uploadsPath flag specifies the path to the restricted area that contains the login form. The ":" Hydra uses to separate the options. The letter "F" is used to specify a regex search for failure, in this case, it looks for the string "Wrong Password" in the response to determine if the attempt was successful or not.

----------------------------------

## **What else can be added?**

I like to add the output so sometimes when I miss something on screen because the verbosity is too high I don't miss the combo if I set that to write to a file. We just use the -o switch.


`hydra -L myList.txt -P rockyou.txt -e nsr -F -T64 -o FOUNDPASSWORDS.txt http-get://<host>/uploadPath:F=Wrong Password`

----------------------------------

# Cracking different services passwords

If you've identified a service running that takes authentication, chances are Hydra has it covered. All of them can be completed with very small syntax changes, making Hydra so effective as a cracker. You just change the service, and if you need help on some of the more challenging services that may take a bit more configuration you can view the modules help info with...
 
 `hydra -U http-post-form` 
 
 or 
 
 `hydra -U WhateverModuleYourTryingToCrack`

 # Examples

 `hydra -L myList.txt -P rockyou.txt irc://<IpAddress>`

  `hydra -L myList.txt -P rockyou.txt mysql://<IpAddress>`

   `hydra -L myList.txt -P rockyou.txt telnet://<IpAddress>`

 `hydra -L myList.txt -P rockyou.txt ftp://<IpAddress>`

 `hydra -L myList.txt -P rockyou.txt oracle-sid:/<IpAddress>`

------------------------------------

## Resuming A Session
You can always resume the session with `hydra -R`. The file is called hydra.restore, if that files present you can resume the session, the hydra.restore file is specifically created when terminating a session that isn't finished so that you can continue where you left off. 

`hydra -I`, or -I anywhere in the command will skip hydra looking for the resume file which is stored inside whatever directory you started the session. 

 Keep in mind if you use -I in the original command you can't pause and resume that session anymore.

------------------------------------

***It's important to note that using tools like Hydra without permission is illegal and can cause serious damage to the targeted systems, it's always a good practice to test security in your own networks or with explicit permission.***

If you are new to cracking passwords, I got started with BurpSuite, it's just to large of a GUI to effectively run long lists quickly.

----------------------------------
### **Brendan Frisby**
### [Github](https://github.com/bfrisbyh92)