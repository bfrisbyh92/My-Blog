---
title: Capture Still Images on Browser using JavaScript
publishedOn: November 13, 2020
excerpt: Before we begin here is the link to what you'll be able to create once you read this whole article.Yes, indeed, it is possible to capture images on the browser. Well, it is true that with the power of JavaScript, we can do almost anything but on a browser.
readingTime: 11 mins
---

Before we begin here is the [link](https://snapshotcam.netlify.app/) to what you'll be able to create once you read this whole article.

Yes, indeed, it is possible to capture images on the browser. Well, it is true that with the power of JavaScript, we can do almost anything but on a browser.

Now in order to click still images on your browser, we are going to use JavaScript's Navigator APIs. Well for those who are unfamiliar with JavaScript's Navigator API, here is a short explanation of it that I found on [javascripttutorial.net](https://www.javascripttutorial.net/javascript-bom/javascript-navigator/#:~:text=The%20JavaScript%20Navigator%20provides%20information,via%20the%20read-only%20window.&text=The%20Navigator%20object%20has%20properties,a%20property%20of%20the%20window.).

> The JavaScript Navigator provides information about the web browser and its capabilities. You can reference the Navigator object via the read-only window.navigator property.
> The Navigator object has properties that convey the browser’s information. For example, the `userAgent` is a property of the `window.navigator` object. It is a long string that identifies the web browser.

```js
//Run this in your console now

window.navigator.userAgent;

//The output should somewhat look like this
/* Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 
(KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36 
OPR/72.0.3815.186 */
```

So, yes with the Navigator API, you can get all the data about the user's device and also have access to particular peripherals like the device's camera, microphone, etc. Now the Navigator API is pretty rad considering the variety of stuff you can do with it.

In fact, **just in case if you did not know this**, you can even check the battery status/percentage/charging of the device, and on mobile devices, you can even use `navigator.vibrate(100)` in order to vibrate the user's device just for some haptic feedback.

So by now, you probably have got enough idea of what you can do with JavaScript's Navigator API, it is way sexier than how it sounds here.

# The Code

Well since we are making a camera app, we need to show the user what his/her device's camera is seeing. And in order to do that, we are going to have to stream their camera footage on an HTML Video tag. So here's how the HTML looks like,

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Title</title>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    <link
      href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css"
      rel="stylesheet"
    />
    <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
  </head>
  <body>
    <center class="container">
      <h1>Camera</h1>

      <video class="videoStream" muted playsinline autoplay src></video>
      <br />
      <center>
        <button class="mdc-button capture-shot">
          <div class="mdc-button__ripple"></div>
          <i class="material-icons mdc-button__icon" aria-hidden="true"
            >camera</i
          >
          <span class="mdc-button__label">Capture Image</span>
        </button>
      </center>
      <canvas class="shot"></canvas>
    </center>

    <script>
      mdc.ripple.MDCRipple.attachTo(document.querySelector(".capture-shot"));
    </script>
  </body>
</html>
```

Well I used Material UI in order to make the capturing buttons look a bit prettier.

So as you can see in the HTML, there are **3 main components** the `<video>` tag to stream the footage sent from the device's camera, the `<button>` tag to click the picture and `<canvas>` the legendary HTML5 Canvas tag where we would be seeing the still image that we click when the `<button>` is pressed.

Now let's take a look at the CSS, it ain't much but still I want to show you guys the whole code.

```css
body {
  font-family: Sans-Serif;
  color: orangered;
}

video,
canvas {
  width: 100%;
  max-width: 30pc;
}
```

That's all CSS we need for this, now let's move on to the most essential part of this project, the JavaScript. Now pay attention on each and every line that I write after this because it is important that you understand every line of code that I wrote in order to bring life to this project. If you have any questions regarding the JavaScript part, feel free to mention it in the comments down below.

```js
const video = document.querySelector(".videoStream");

let constraints = {
  audio: false,
  video: true,
};
//Here we are mentioning which navigator peripherals are required for this project.
//We are keeping audio false lest the user would hear his own audio when the
//video gets streamed on the <video> in html

function handleSuccess(stream) {
  window.stream = stream; // make stream available to browser console
  video.srcObject = stream;
  //Here we are hooking up the user's camera footage/stream to the video footage
  //in order to make it play/stream what the user's camera sees
}

function handleError(error) {
  if (error.name.includes("NotAllowedError")) {
    console.log("Please allow to record video dumbass");
  }
}
//In case the user does not allow to record video/audio, we will maturely handleSuccess
//the error

navigator.mediaDevices
  .getUserMedia(constraints)
  .then(handleSuccess)
  .catch(handleError);
//With navigator.getUserMedia we are getting the user's media device outputs based
//On the constraints we have applied i.e. we want the user's video and not audio
//If we are allowed access to user's media then we run the function handleSuccess
//Which basically hooks up the device's camera footage to the <video> footage
//In case if the user does not allow access then we handle the error by calling
//the respective function

//Capture Image
const canvas = document.querySelector(".shot");
//In order to click still images, we are going to draw the frame on an HTML5 canvas

document.querySelector(".capture-shot").addEventListener("click", () => {
  //When user clicks on the capture button, we need to capture the image duh...
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  //With this we are setting the canvas' height and width to the footage's dimensions
  //The canvas, by default might be smaller than the footage's dimensions which might
  //lead to taking only a part of the frame instead of the whole frame

  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  //With this function we draw the frame when the user presses the canvas button
  //This line literally means draw a 2d image of the current frame in video which
  //is basically the <video> tag where the device's camera footage is being streamed.
  //We also need to pass in the parameters to start drawing the image of the frame from
  //0, 0 which are the x, y coordinates of where to start drawing the image on the canvas,
  //We also pass in the end coordinates which is basically the size of the canvas
  //in which coordinates the canvas stops drawing the frame of the footage

  var imgURL = canvas.toDataURL("image/png");
  var img = new Image();
  img.src = imgURL;
  console.log(imgURL);
  //This is the data URL with which you can basically download
  //the still image that you took by clicking the capture button
});
```

This is what it would look like if you run the code on your machine.

![Camera App Screenshot](https://dev-to-uploads.s3.amazonaws.com/i/jzct2zheht29u50alc87.png)

I know, I was too shy to turn on my real camera so I used my virtual camera... However you can check out the code working by [clicking here](https://xperbycoder.netlify.app/deploy/V0FWZmVh7bSAozvT5U1RbWjtsky2/-MM0EBdqOSas0sk_vlv1/)

Now for some of you, **exclusively those who did not read the code above**, let me summarize on what's going on here.

# Summary

So basically at first what we are doing here is, creating an object variable called `constraints`, where we would basically mention what media devices we are going to access of the user.

```js
const video = document.querySelector(".videoStream");
//The html video tag where we would be streaming the device's video

let constraints = {
  audio: false,
  video: true,
};
```

We are going to keep the audio false since we are using the `<video>` in order to stream the user's video, and if audio were true, the user would be able to hear his own voice which is preposterous.

After this, we are going to hook up the user's video to the `<video>` tag so that the user can view his video and click an image when he/she wants to. And on order to do that, we create a function

```js
function handleSuccess(stream) {
  window.stream = stream;
  video.srcObject = stream;
}
```

All of the video data would be present inside the stream parameter which is like an event parameter that returns `navigator` data.

Now whenever you are accessing a peripheral like the user's camera/microphone you would be needing the user's consent to do so.
And in case the user denies to do so, then the code would throw an error stating the reason of the error. Usually if the user denies the reason of the error is a string with a message like **_NotAllowedError_** and we need to check if that error comes up or not. In case it does, we need to handle it.

```js
function handleError(error) {
  if (error.name.includes("NotAllowedError")) {
    console.log("Please allow to record video dumbass");
  }
}
```

And now finally in order to start the video stream of the device's camera on the `<video>` tag, we need to run this line,

```js
navigator.mediaDevices
  .getUserMedia(constraints)
  .then(handleSuccess)
  .catch(handleError);
```

Over here what we're doing is getting the user's media data with the help of `navigator.mediaDevices.getUserMedia(constraints)` based on the `constraints` that we set before which is allow video and not audio, this returns a `promise` which we get as a parameter variable in the function `handleSuccess(stream)`, and in case if there is an error then we `.catch()` it and call the `handleError(error)` function to further handle it. And that's it we've finally started to stream the user's footage on our `<video>` but we have still not written the code to click images.

Now, in order to take a still image, we are going to use HTML5's Canvas to draw the image of the current frame that is being showed on the video stream.
So we need to click an image only when the user presses on the Capture button, and therefore,

```js
const canvas = document.querySelector(".shot");
document.querySelector(".capture-shot").addEventListener("click", () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);

  var imgURL = canvas.toDataURL("image/png");
  var img = new Image();
  img.src = imgURL;
  console.log(imgURL);
});
```

In the first two lines, what we're doing is setting the size of the canvas to dimensions of the video that we are receiving from the userMedia. `canvas.width = video.videoWidth; canvas.height = video.videoHeight;`
After this we draw the frame which was being shown when the user clicked the capture button. In order to do that we run this line,
`canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);` Over here we are basically drawing a 2d image of the `video` frame on the `canvas`. We use HTML5 Canvas's `.drawImage()` function in order to do draw the frame. This generally takes in 5 parameters respectively, the video element in order to draw it's frame, the x and y coordinates of where to start drawing on the canvas i.e. `0, 0` and the x and y coordinates of where to end drawing on the canvas which is basically the dimensions of the `canvas` since we want the image to take up all the space in the `canvas`.
And that's it. We have made our Browser Camera that can take still images!! Pretty cool right? Now in order to download the image you have taken, you can run the following code where we are basically converting the `canvas` drawn data into a `.png`, well it can be anything, jpeg as well.

```js
var imgURL = canvas.toDataURL("image/png");
var img = new Image();
img.src = imgURL;
console.log(imgURL);
```

Open the URL that get's logged in the console, it's basically a data link. In layman's language, it's the image you clicked just that now it's no more a visual image but just a string comprising random characters that makes sense only to computers.

Meanwhile check out [SnapShot](https://snapshotcam.netlify.app/) the camera app that I made where you can not only take images but also edit them just after you're done with clicking your image!! Click on the image to open the website!!

[![SnapShot Mockup](https://dev-to-uploads.s3.amazonaws.com/i/lpv2g4bzy7r28xsc8xbh.jpg)](https://snapshotcam.netlify.app/)
You can also contribute to the project here!!

## [Check out the Github repository](https://github.com/Jaagrav/Snapshot)
