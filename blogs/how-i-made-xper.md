---
title: How I made Xper - A RealTime Code Deployer and Code Editor
publishedOn: November 4, 2020
excerpt: In the world of Web Development, I have always faced one major/irritating problem which is responsiveness of a website. Everytime when I am developing a website, I make a quick change and push it in order to quickly check how it looks on my phone.
readingTime: 5 mins
---

## Before we begin

In the world of Web Development, I have always faced one major/irritating problem which is responsiveness of a website. Everytime when I am developing a website, I make a quick change and push it in order to quickly check how it looks on my phone. And it does not even update in RealTime!!! Now I know we can simply turn on the inspector and toggle to mobile screen mode to have a look and get an idea of how it might look on a mobile device, but is it accurate? I still always have this urge to check something that I spent hours working on in realtime, on my phone!!

> Now imagine if it was possible!

Imagine, a tool/code editor where you can simply write code, and then deploy it, and see your deployed code update in realtime, **as you code on all DEVICES** that has your website open. Imagine how easy it would be to see your code's output just after you make that small two line change to your code and see it update in **REALTIME** on your phone without connecting your laptop to it. Imagine being able to edit your **code** on any device that you visit your website from!!

> Seem's kinda surreal right?

Well, that's why with the help of AceJS and FirebaseJS, I created something pretty much what I needed. Something that I told you to **imagine** above. Now you might be like, "_**What the hell are you talking about?!**_", Well you need to watch the video below in order to get a hint of what I am really talking about.

<iframe src="https://www.youtube.com/embed/UFeu4lRtPHI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Well, if you watched the video, thanks for watching but in case you're in a hurry and you did not, let me explain Xper to you in a nutshell

> Xper - In a nutshell

Xper is a responsive React app where you can simply create HTML/CSS/JS code and see it run in RealTime on all the devices that has your deployed website open. Again, I will request you to consider watching the YouTube video in order to properly understand what Xper is really about.

> How Xper works?

Xper uses AceJS in order to highlight your code, for backend, I am using Firebase, now with Firebase's realtime database, I was able to update the database with data in realtime, so this gave me an idea, what if I make a website and save all my codes/snippets quickly on the website, well of course I could use the browser's Local Storage in order to save all of it, but is it really useful? Just write code and save it? That also on my device only! I wanted to create something like codepen, where I could easily write code and view the output in realtime and once when I was done, simply close the browser window, just like I do once I am done designing something on Figma. Now with JavaScript's `document.write()` function and HTML5's `iframe`, I could easily run the user written code everytime the user made changes and show him/her the output of the code the user wrote in realtime. Makes Sense. And since I am using Firebase's RealTime Database, I could easily save the code everytime the user made a change! And with Firebase's on change database listener, I could easily update the user written code everywhere the website was open. With React Routers I could easily provide the user a deploy link where the user could see the deployed version of his/her code. And that's how I developed Xper.

> Xper is OpenSource!!!

Check out the [repository](https://github.com/Jaagrav/Xper)
You can contribute your changes and versions easily to my repo by creating a PR or an issue that developers around the world could work on. And oh, check out [Xper](https://xper.jaagrav.in/) now!! I bet you'd love to play with it!!!

> Learn the technologies used!!

So if you want to learn all the technologies that I used, just tap on their names, to know more:

- [React](https://reactjs.org)
- [Material-UI](https://material-ui.com)
- [React-Ace](https://www.npmjs.com/package/react-ace)
- [Firebase](https://firebase.google.com/docs/web/setup)
- [SweetAlert](https://sweetalert.js.org/guides/)

## Make your own code editor

Check out this video where I made a simple CodePen clone

<iframe src="https://www.youtube.com/embed/8x5DdcSBaZk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Clone this [repo](https://github.com/Jaagrav/CodePen-Clone) to run it on your machine

Here is how you can easily use AceJS to add a code editor to your website with HTML5 and Vanilla JavaScript.

> Here's the HTML

Paste this at the bottom of your HTML first

```html
<div id="html-editor" style="height: 100%;"></div>
<!--Define a div with an id where you want to write the code-->

<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.js"></script>
```

> Here's the JavaScript

Paste this in your main JavaScript file i.e. basically the file where you're writing your JavaScript

```js
let htmlEditor = ace.edit("html-editor");
//html-editor is the id of the div where I want to write the code

htmlEditor.session.setMode("ace/mode/html");
htmlEditor.setTheme("ace/theme/terminal");

htmlEditor.session.setValue(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>`); //Default text you want to show in your code editor

htmlEditor.session.setUseWrapMode(true);
//You can even enable text wrap which is disabled by default

htmlEditor.setOptions({
  fontSize: "20pt",
});
```

Once you're done doing this, you would get to see something like this!!
![image_2020-11-04_183923](https://user-images.githubusercontent.com/52719271/98115576-0ec73f80-1ecd-11eb-9311-870ce12d2529.png)

Pretty cool right?
Here, check it out [live](https://xperbycoder.netlify.app/deploy/V0FWZmVh7bSAozvT5U1RbWjtsky2/-MLIKKf5pJtMa0Mv1ZPB/) on your device, and also you can view the code [here](https://xperbycoder.netlify.app/edit/V0FWZmVh7bSAozvT5U1RbWjtsky2/-MLIKKf5pJtMa0Mv1ZPB)
Here is how it looks on [Xper](https://xperbycoder.netlify.app),
![image_2020-11-04_184153](https://user-images.githubusercontent.com/52719271/98115804-68c80500-1ecd-11eb-8aba-dc6d87dc4325.png)

> Challenges for you!!

Try creating a realtime code editor by yourself, add cool text themes, an awesome UI, and a feature you personally have always wanted on a realtime code editor. Also try to save the code in the local storage so that the user has access to his code only on his computer. And then make a Github Repo and mention it down below.

**THE BEST SUBMISSION WILL BE FEATURED IN MY NEXT ARTICLE!!**

Until then, thanks for your time, reading this, and yes you made it through all the crap that I talked about in this article, hope you liked it!!

> Check out [Xper](https://xperbycoder.netlify.app) > [Contribute](https://github.com/Jaagrav/Xper) to Xper
> [Code](https://xperbycoder.netlify.app/deploy/V0FWZmVh7bSAozvT5U1RbWjtsky2/-MLIKKf5pJtMa0Mv1ZPB/) to add AceJS to your website
> <br>Stay tuned to learn how to make your own realtime code editor that can save your code locally on your device!!
