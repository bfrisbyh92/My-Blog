---
title: Using Proxychains
publishedOn: January 15th, 2023
slug: proxychains
excerpt: Proxychains is a tool that allows you to redirect network connections through proxy servers. This can be useful for a variety of purposes, such as hiding your IP address, bypassing network restrictions, or accessing geo-restricted content.
readingTime: 3 mins
---

# Using Proxychains

Proxychains is a tool that allows you to redirect network connections through proxy servers. This can be useful for a variety of purposes, such as hiding your IP address, bypassing network restrictions, or accessing geo-restricted content.

## Installation

To install proxychains on Mac M1 with Homebrew as a package manager, you can use the following command:

`brew install proxychains-ng`

Linux OS's usually will be

`sudo apt install proxychains-ng`

or 

`sudo apt-get install proxychains-ng`

maybe even...

`pkg install proxychains-ng`
on Termux

## Configuration

The default configuration file for proxychains is located at opt/homebrew/etc/proxychains.conf for M1 Mac or just /etc/proxychains.conf for others. This file contains a list of proxy servers that proxychains will use. By default, the file contains the following


        # proxychains.conf  VER 3.1
        #
        #        HTTP, SOCKS4, SOCKS5 tunneling proxifier with DNS.
        #   

        # The option below identifies how the ProxyList is treated.
        # only one option should be uncommented at time,
        # otherwise the last appearing option will be accepted
        #
        dynamic_chain
        #
        # Dynamic - Each connection will be done via chained proxies
        # all proxies chained in the order as they appear in the list
        # at least one proxy must be online to play in chain
        # (dead proxies are skipped)
        # otherwise EINTR is returned to the app
        #
        #strict_chain
        #
        # Strict - Each connection will be done via chained proxies
        # all proxies chained in the order as they appear in the list
        # all proxies must be online to play in chain
        # otherwise EINTR is returned to the app
        #
        #random_chain
        #
        # Random - Each connection will be done via random proxy
        # (or proxy chain, see  chain_len) from the list.
        # this option is good to test your IDS :)

        # Make sense only if random_chain
        #chain_len = 2

        # Quiet mode (no output from library)
        #quiet_mode

        # Proxy DNS requests - no leak for DNS data
        proxy_dns 

        # Some timeouts in milliseconds
        tcp_read_time_out 15000
        tcp_connect_time_out 8000

        # ProxyList format
        #       type  host  port [user pass]
        #       (values separated by 'tab' or 'blank')
        #
        #
        #        Examples:


You can create custom config files, if you want to specify a different set of proxy servers to use. Additionally, you can use the -q option to suppress output from proxychains if desired.


## Custom Config File's

To create a custom configuration file, you can create a new file with any name you choose and add the list of proxy servers that you want to use. For example, you can create a file named custom_proxychains.conf in your home directory and add the following lines:

    #strict_chain
    #dynamic_chain
    random_chain
    chain_len 2
    ## This is the minimum you'd need, but more can be added
    # ProxyList format
    #       type  host  port [user pass]
    #       (values separated by 'tab' or 'blank')

    http  proxy1.example.com  8080
    socks5  proxy2.example.com  1080


To use this custom configuration file, you can specify it as an argument when running proxychains. For example:

`proxychains4 -f custom_proxychains.conf command that follows`

### Recap

- -q quiets the output 
- -f specifies a config file to use 
- chain_len can be set in config file
- Default config file located at /etc/proxychains.conf or /opt/homebrew/etc/proxychains.conf

## Usage Examples

`proxychains4 -q nmap --script=dos <host>`

`proxychains4 -q -f $HOME/MyCustomProxyConfig.conf nmap --script=dos <host>`

`proxychains4 nmap -sV --top-ports=1000 <host>`

`proxychains4 -q msfconsole`

`proxychains4 -q curl -X https://github.com/seclists/someRepoHere`

Pretty much any command can be used with proxychains. I found that Metasploit it does not actually work with proxychains even though it seemed to of when you call it at startup. If you confirm that, it does not actually work. That is the only time I've really seen it not work. One good way to check if you are using the default settings, or Tor in general with proxychains. You check the Tor connection...

`curl check.torproject.org`

`lynx check.torproject.org`

`w3m check.torproject.org`

`browsh --startup-url http://check.torproject.org`

All will work for checking your Tor connection. Keep in mind, the later 3 examples are packages I have installed so they may not work for you. Awesome tools though and I reccommend w3m because it's my go to. 