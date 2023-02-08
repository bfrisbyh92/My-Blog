---
title: Easiest Way to Hack WiFi
publishedOn: January 29rd, 2023
slug: hack-wifi
excerpt: I recently ordered a TP-LinkWN722 so I could learn to hack WiFi, and other wirless attacks that require it. In this article, I am going to show my method for hacking a WiFi network. I tried a few methods and found this the easiest. Everything done on my own personal home network always.
readingTime: 7 mins
---

# Hacking WiFi
## What do I mean by 'hacking'?
Obtaining the credentials for the WiFi network, or at the minimum a handshake or PKMS to attempt to crack with Aircrack-ng or Hashcat. 

## Tools Used
- Kali Linux VM
- Airgeddon
- Aircrack-ng OR Hashcat
- Wordlists(seclists in this case, rockyou.txt)
- TP-Link WN722 Wireless Adapter, which takes a bit of modding the driver but does support monitor mode and packet injection. As well as AP and clients. I got this adapter because I wanted one with all four. 

These are the steps to cracking a WiFi network with Airgeddon.

## Process

We are going to need to capture a handshake or PKMS to run a wordlist against. We will do with airgeddon.

Starting airgreddon,

`sudo airgeddon`

When airgeddon is starting, it will go through a list of packages that need to be installed for full function. Just copy, paste, and download those.

`sudo apt install <packages named by airgeddon`

Now, fire up airgeddon again and make sure the checklist has everything installed.

![check](https://github.com/bfrisbyh92/My-Blog/blob/main/public/assets/blogs-media/easiest-way-to-hack-wifi/check.png?raw=true)

Proceed by choosing the adapter you want to use...

![adapter](https://github.com/bfrisbyh92/My-Blog/blob/main/public/assets/blogs-media/easiest-way-to-hack-wifi/adapter.png?raw=true)

Then we want to make sure airgeddon recognizes the card as being in monitor mode, sometimes it doesn't so it's good to just hit 2 before moving forward.


![monitor](https://github.com/bfrisbyh92/My-Blog/blob/main/public/assets/blogs-media/easiest-way-to-hack-wifi/monitor.png?raw=true)

Now we can deauth and capture PKMS or Handshakes


![selectDeauth](https://github.com/bfrisbyh92/My-Blog/blob/main/public/assets/blogs-media/easiest-way-to-hack-wifi/selectDeauth.png?raw=true)

In Monitor mode and ready to scan for target WiFi's **which we only ever test on our own network**


![targets](https://github.com/bfrisbyh92/My-Blog/blob/main/public/assets/blogs-media/easiest-way-to-hack-wifi/targets.png?raw=true)

I am the qwhat WiFi network, just a temporary guest network I setup for this demo.

This is what it looks like while searching for targets, when enough have appeared you close the window that lists them.

![targetz](https://github.com/bfrisbyh92/My-Blog/blob/main/public/assets/blogs-media/easiest-way-to-hack-wifi/targetz.png?raw=true)


Let's select my network


![selectNetwork](https://github.com/bfrisbyh92/My-Blog/blob/main/public/assets/blogs-media/easiest-way-to-hack-wifi/selectMyNetwork.png?raw=true)

and select capture handshake, because it will search for both. PKMS will only search for PKMS, so I find handshake is the best of both worlds.


![selectHand](https://github.com/bfrisbyh92/My-Blog/blob/main/public/assets/blogs-media/easiest-way-to-hack-wifi/selectHand.png?raw=true)

Now we select the way in which it will deauth clients on our selected network, so they are forced to reconnect, allowing us to catch the PKMS/Handshake.


![deauth](https://github.com/bfrisbyh92/My-Blog/blob/main/public/assets/blogs-media/easiest-way-to-hack-wifi/deauth.png?raw=true)
![deauth2](https://github.com/bfrisbyh92/My-Blog/blob/main/public/assets/blogs-media/easiest-way-to-hack-wifi/deauth2.png?raw=true)
![deauth3](https://github.com/bfrisbyh92/My-Blog/blob/main/public/assets/blogs-media/easiest-way-to-hack-wifi/deauth3.png?raw=true)

We have a captured handshake/PKMS. Now just to crack it. If we return to airgeddon's main menu, they have an option for decrypting with Aircrack or Hashcat.

![decrypt](https://github.com/bfrisbyh92/My-Blog/blob/main/public/assets/blogs-media/easiest-way-to-hack-wifi/decrypt.png?raw=true)
![decrypt2](https://github.com/bfrisbyh92/My-Blog/blob/main/public/assets/blogs-media/easiest-way-to-hack-wifi/decrypt2.png?raw=true)

I won't show the password, but you get the point.

**Wifite may be easier to use. Wifite is an automated Python networking scripts, Airgeddon is better for learning, to see each step in the process. You get to select different deauth tactics, catch PKMS, Handshake, or both with Aireggon. You have a menu for each step, to decrypt using Hashcat or Aircrack-ng, etc. Wifite will do everything for you and either be successful or fail. Wifi can be configured further if you view the help page, it will do all the same things but out of the box it's an automated networking pentest script. Both will get the job done but Airgeddon was a better tool for learning.**

**Please always use your own network, and be considerate of others.**



