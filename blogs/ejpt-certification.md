---
title: eJPT Pentesting Testing Certification Review
publishedOn: Febuary 13th, 2023
slug: ejpt-certification
excerpt: I recently completed the eJPT certification by eLearnSecurity on Pentesting and will give a review on the parts of the course I appreciated, who this certification is geared towards, and what it lacks. 
readingTime: 8 mins
---

# **The eJPT by eLearnSecurity and INE.com**
## [**Certified Penetration Tester**](https://drive.google.com/file/d/1B3XyQHf7r9UD15ROV5DN_z23L0i-9ozz/view)
### By [***Brendan Frisby***](https://brendanfrisby.live) 
**[Github](https://github.com/bfrisbyh92)**


> The eJPT (eLearnSecurity Junior Penetration Tester) is a certification that demonstrates an individual's knowledge and skills in penetration testing and ethical hacking. The certification is offered by eLearnSecurity, a company that provides training and certification in IT security.

The eJPT certification is designed for individuals who are new to the field of penetration testing and ethical hacking. The certification covers a wide range of topics, including:

- Information gathering
- Vulnerability scanning
- Exploitation
- Post-Exploitation
- Reporting

To earn the eJPT certification, individuals must pass an online exam that tests their knowledge of these topics. The exam is practical in nature and requires individuals to demonstrate their skills by completing a series of tasks. The certification is valid for two years, after which recertification is required.

Individuals who earn the eJPT certification are considered entry-level penetration testers and are able to perform basic penetration testing tasks. The eJPT certification is not a professional certification and is not a substitute for experience. But it is a good starting point for individuals who want to break into the field of penetration testing and ethical hacking.

------------------------------------

# V1 vs V2 

I strongly recommend the V1 version of the eLearnSecurity Junior Penetration Tester (eJPT) course over V2. The V1 course was much shorter in length and all the materials were in the form of readable slides straight and to the point. In contrast, V2 is an extended version of V1, covering the same information in a longer and more drawn-out video format. 

V2 does go further into detail on the same topics. I did pickup a few things from V2 that were not covered in V1(clearev in a meterpreter, getsystem in meterpreter, uhh idk a few other things I'm sure) but for the most part it was the same information. I think V1 is just INE/eLearnSecurity's old eJPT, they just call it V1 now? V2 is 3x as  about 150 hours of class time. V1 is about 50 hours. 

------------------------------------

# The Test....

The test was a penetration test of Syntex Corp's network, consisting of 4 Windows and 2 Linux machines running 1-7 services each. To pass, proficiency in target enumeration is crucial. There are 35 questions, including 3 hidden flags, 5 related to exploits used per machine, and 4-5 on the process of exploiting an internal network. Additionally, there are 4 password cracking questions and the rest relate to different ways of enumerating information. One question is a trick question, asking about the number of databases on the first network, which is 2, but only one is visible on nmap.

------------------------------------

**For those interested in taking the eJPT exam**...

The eJPT exam turned out to be more challenging than expected. It comprises 35 questions, and to pass, one must answer at least 70% correctly or 25 questions. The test covers a variety of topics, such as password cracking, target enumeration using Nmap and Metasploit, machine exploitation, privilege escalation, and network pivoting.

------------------------------------

# Easiest-Hardest Parts of Exam
In my experience, I found password cracking to be the easiest part of the eJPT exam, since I have extensive experience using various tools and even coding my own scripts in Python. Enumerating targets was also relatively easy for me, given my familiarity with Nmap and Metasploit and experience in target enumeration. However, I found exploiting all of the machines to be challenging and could only exploit 4 out of 6. I faced difficulty in achieving privilege escalation on one of the exploited servers, as the Metasploit post modules were not working and I wasn't familiar enough to perform that task manually. Additionally, pivoting was challenging, as it required manual execution since getsystem and other modules didn't work. I did eventually manage to pivot, but was unable to exploit the vulnerable machine on the internal network to get the final flag.

------------------------------------

# How I passed
Eventually, I successfully passed the eJPT exam by exploiting 3 Windows and 1 Linux machine, performing username enumeration, identifying the version of Wordpress, Drupal, and PHP, exploiting SQL injection, uploading a web shell, cracking four passwords, and completing a few other miscellaneous tasks. It took me approximately four hours of actual computer time spread across three sittings to complete the exam within the 48-hour time limit. The most time-consuming part was scanning with the Kali browser, which can be challenging to use effectively compared to bare metal.

------------------------------------

***What happened to the openvpn connection, that is a way better method. If it's not broke, in this situation, don't fix it.***

------------------------------------

Overall, the eJPT exam covers a range of topics related to Penetration Testing/Ethical Hacking, and it's essential to have a solid understanding of each one to succeed. It's a well rounded test and you need to be sufficient in each area without to many very weak spots to pass. If you're interested in taking the exam, I recommend practicing your skills in password cracking, enumerating targets with both Nmap and Metasploit, researching exploits, exploiting machines, post-exploitation techniques, privilege escalation, and pivoting to improve your chances of passing.

------------------------------------
# When are you ready for the exam?
I would think you are safe to take it when you can enumerate any target easily in any way and at least know how to use metasploit and searchsploit enough to narrow down a good exploit, run that module, and know how to move around a little bit. You also need to be able to crack passwords with Hydra(If you are newer, just use BurpSuite to crack passwords, it's far easier to use with that massive GUI, you don't have to mess with any Hydra syntax.)

------------------------------------


# What the eJPT did for me

The eJPT course did provide me with a solid foundation in various skills such as ARP poisoning, Python scripting, tools like Metasploit and Burp Suite, Wireless Attacks, Exploitation, and Post-Exploitation techniques, Information Gathering, Vulnerability Assessment, and Reporting. It is a great starting point for building more advanced knowledge and skills in the field of Penetration Testing. What it really did for me was confirm that I'm in the right area, because I've never felt so charged and happy to be learning anything. 

------------------------------------
# Getting the most out of the course

**I believe that for anyone to get the most out of this course, they must use the tools and techniques outside of the course constantly, as repetition is key to mastering any skill. This course does not push you, the quizs are 1-3 easy questions. You can easily get to the test and have no ability to pass if you don't practice outisde of the course. The test is 100% hands on realistic situation, you can only answer the questions by doing. Your best bet is to treat it exactly like the scenario it is, a pen test. Get a Notion Page, a Pen and paper, whatever, and map that network out. Write down everything you find and slowly comb through this network pulling all the information you can. It will let you pin questions if you are iffy on them. Keep track of where you are, where you need to get to pass(25 questoins correct), and don't allow yourself to get to far offtrack down rabbit holes. 48-hours is extremely gracious, take your time.**

------------------------------------

# V1 eJPT Course Length
It took me approximately one month to complete the V1 version of the eJPT course. It's roughly 50 hours of course material, and I completed V1 in 30 days with an average of 1.7 hours per day. Although it wasn't necessary, I chose to complete it in order to gain more knowledge and experience. V1 doesn't count towards any certification, but I found it valuable to have the additional information. 

------------------------------------
# V2 eJPT Course Length
The V2 course material took me a total of 2 months to complete, with an average of 3.125 hours of study per day. It is 150+ hours of course material. I just choose to do it quickly because I want to move to the OSCP.

###### *Working on the OSCP and will review it as well.*

## ***[Brendan Frisby](https://brendanfrisby.live)***
## [eJPT Certification](https://drive.google.com/file/d/1B3XyQHf7r9UD15ROV5DN_z23L0i-9ozz/view)
## **[Github](https://github.com/bfrisbyh92)**
