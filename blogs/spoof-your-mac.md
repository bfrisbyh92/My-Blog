---
title: Spoof Your Mac Address on M1
publishedOn: January 26th, 2023
slug: spoofyourmac
excerpt: A very brief article, quickly showing how to spoof your Mac address on Mac M1 with Spoof-Mac
readingTime: 3 mins
---

# How to Spoof your Mac Address on M1

Spoofing your MAC address, also known as "MAC address spoofing," allows you to change the unique identifier assigned to your network interface card (NIC) to any value you want. This can be useful for a variety of reasons, including:

- Bypassing MAC address filtering: Some networks are configured to only allow devices with specific MAC addresses to connect. By spoofing your MAC address to match one of the allowed addresses, you may be able to gain unauthorized access to the network.
- Privacy: Your MAC address can be used to track your devices and activities on a network. Spoofing your MAC address can help to obscure your identity and make it more difficult for others to track your online activities.
- Testing network security: Penetration testers may use MAC address spoofing as part of their testing process to check if a network is vulnerable to this type of attack.

## Methods

There are plenty of different ways to spoof your mac address. I like doing it with spoof-mac package on Homebrew but it's far from the only way. I also use Scapy to change my Mac address with Python. Bettercap can change your mac address as well. There are tons of ways, but we are going to show spoof-mac.

## Installation

`brew install spoof-mac`

`spoof-mac --help` or `spoof-mac`

## Output

╰─ spoof-mac
Usage:
    spoof-mac list [--wifi]
    spoof-mac randomize [--local] <devices>...
    spoof-mac set <mac> <devices>...
    spoof-mac reset <devices>...
    spoof-mac normalize <mac>
    spoof-mac -h | --help
    spoof-mac --version

Check your existing Mac Address before changing, `ifconfig en0` or `ifconfig`

## Usage

**Make sure your Wifi is turned off before this command. Turning it off on menu bar is enough for me on my Mac. 

`sudo spoof-mac randomize en0`

en0 is my interface, and may be yours also on Mac M1 but if it isn't you will need to change that part. Just ifconfig and check the name of your interface you want to spoof. 

### Confirming it worked

`ifconfig en0`

### Return Normal Mac Address

You can either restart the computer, or use spoofmac to normalize the Mac Address, in the same process. Make sure you turn your Wifi off, and call the correct command. 

`sudo spoof-mac normalize en0`

Pro Tip: Make aliases and custom functions inside your .zshrc file to make life easier.
`alias "spoofmymac=sudo spoof-mac randomize en0`

***It should be noted that while changing your MAC address can offer some benefits, it may also break certain functionality and not all devices support this feature. Also, it is not legal in all countries, and some states or organizations may have specific regulations regarding this practice.***