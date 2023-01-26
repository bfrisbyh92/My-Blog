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

Bettercap is Ettercap's Successor and they, for the most part, knocked Bettercap out of the park. What they did not at all knock out of the park is their documenation. For example, for their Web-UI usage, they basically just say yes, we have one of those in their documenation and that's it. Show's you how to start the web-ui, practically zero usage. Luckily, I'm going to aim to cover that gap in this article. 

[Don't believe me? See for yourself.](https://www.bettercap.org/usage/webui/)

One more thing, That Web-UI is cool but I won't use it anymore. It was awesome to have when first using Bettercap but the command line is where it's at.

---
### My [Wireless Adapter](https://www.amazon.com/Tp-Link-TL-WN722N-IEEE-802-11n-draft/dp/9800359850/?_encoding=UTF8&pd_rd_w=kIMf5&content-id=amzn1.sym.b4f172f0-a2ab-4ffa-ac9d-22e96231ca8e&pf_rd_p=b4f172f0-a2ab-4ffa-ac9d-22e96231ca8e&pf_rd_r=M1J7MN14V00BAF5B96SS&pd_rd_wg=EFNVK&pd_rd_r=43dffa20-5d5f-4e20-800f-5efdacd16c66&ref_=pd_gw_ci_mcx_mr_hp_atf_m)
---
*This wireless adapter has monitor mode, packet injection, access points, and ability to accept clients*
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


**Not Finished Writing this article**



***It should be noted that Bettercap is a tool that can be used for both legitimate penetration testing and illegal hacking activities. It is important to obtain proper authorization before using it on any network or device.***