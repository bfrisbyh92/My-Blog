---
title: Create beautiful carousels or Image Sliders on React with this framework
publishedOn: Mar 2, 2021
excerpt: So recently I joined this organization called WebDevGoa where we have to develop this website that includes this interactive carousel that looks pretty awesome and at the same time it also is pretty complex.
readingTime: 6 mins
---

## Story

So recently I joined this organization called [WebDevGoa](https://twitter.com/WebDevGoa) where we have to develop this website that includes this interactive carousel that looks pretty awesome and at the same time it also is pretty complex. Now of course there are many other react frameworks that also provide carousels that are very interactive but the thing is there are way too ordinary. And the one that our designers at the organization wanted was pretty complex and none of us found a proper open-source library or framework that we exactly needed. And that's when it came to my mind that instead of wasting time in looking for a framework, why not make one by myself, right? And guess what, I definitely did.

<div class="flex justify-center w-full"><blockquote class="twitter-tweet"><p lang="en" dir="ltr">We were looking for a specific carousel for our project. <br><br>So <a href="https://twitter.com/xJaagrav?ref_src=twsrc%5Etfw">@xJaagrav</a> decided to develop it instead of searching for packages. 😎<br><br>Just a normal day at Web Dev Goa. <a href="https://twitter.com/hashtag/javascript?src=hash&amp;ref_src=twsrc%5Etfw">#javascript</a> <a href="https://twitter.com/hashtag/code?src=hash&amp;ref_src=twsrc%5Etfw">#code</a> <a href="https://twitter.com/hashtag/React?src=hash&amp;ref_src=twsrc%5Etfw">#React</a> <a href="https://t.co/Ryosx7UU2j">https://t.co/Ryosx7UU2j</a></p>&mdash; Web Dev Goa - All things web (@WebDevGoa) <a href="https://twitter.com/WebDevGoa/status/1360489333627650050?ref_src=twsrc%5Etfw">February 13, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div>

## How does it look?

Well too much talkie now let's showie what I made (yeah Idk why I wrote that)

<iframe src="https://codesandbox.io/embed/react-pretty-carousel-xulxf?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-pretty-carousel"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

Yeah exactly, so when you move the carousel, the size of the images also changes, just the way we wanted it to be like. Well I hope you're reading this article on your computer, no don't worry it is responsive and it definitely works on mobile phones, but to experience the real effect that is created on movement of the carousel is achieved better when you're using it on a computer. You can actually check it out working on a better scale here on the [docs](https://react-pretty-carousel.herokuapp.com/).

Check it out in full screen mode and then continue reading this article.

## How to add it to my React Website?

Yep, I've got you covered on that as well, you can either watch this YouTube video to learn how to use this framework,

<iframe src="https://www.youtube.com/embed/oE97LMjPz5I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Or you can continue reading this article to read and learn how you can add it to your website in just 4 steps!

### Step 1: Install react-pretty-carousel

Just copy and paste the command, depending on the package installer you use, in your bash or CMD and it will install the package:

```
npm i react-pretty-carousel --save
```

OR

```
yarn add react-pretty-carousel
```

### Step 2: Import the package to your code

If you know react, even if you're a beginner, you probably know how to import a package but anyway just to make it easy for you, I am mentioning the code to import the package down below!

```jsx
import { CarouselWrapper } from "react-pretty-carousel";
```

Here's a list of stuff you can import from the package, you might need it once you want to control the carousel from custom buttons or programmatically.

```jsx
import {
  CarouselWrapper,
  prev,
  next,
  moveTo,
  switchTo,
  presentIndex,
} from "react-pretty-carousel";
```

### Step 3: Add the Carousel Component to your JSX code

Finally, add this carousel to your react JSX code, if you just want to do this in order to test the framework locally on your machine, you can simply copy and paste all the code that I have written here, although you can check it out working on the [docs](https://react-pretty-carousel.herokuapp.com/).

So this is what I wrote in App.js

```jsx
<CarouselWrapper items={3} mode="gallery">
  <div className="image image1"></div>
  <div className="image image2"></div>
  <div className="image image3"></div>
  <div className="image image4"></div>
  <div className="image image5"></div>
  <div className="image image6"></div>
</CarouselWrapper>
```

Yeah don't be confused by the code I wrote, I just want to add the image as background to these divs, I know it would make our work more complicated but just to resize the images properly, I am using this method.

And then I wrote this in index.css

```css
body {
  background: rgb(15, 34, 68);
}

.App {
  font-family: sans-serif;
  text-align: center;
}

.image {
  height: 20pc;
  width: 100%;
  border-radius: 10px;
}

.image.image1 {
  background: url("https://react-pretty-carousel.herokuapp.com/static/media/photo-1.da31d5ae.jfif");
  background-size: cover;
}
.image.image2 {
  background: url("https://react-pretty-carousel.herokuapp.com/static/media/photo-2.6932e41c.jfif");
  background-size: cover;
}
.image.image3 {
  background: url("https://react-pretty-carousel.herokuapp.com/static/media/photo-3.3cf50746.jfif");
  background-size: cover;
}
.image.image4 {
  background: url("https://react-pretty-carousel.herokuapp.com/static/media/photo-4.e7eeb637.jfif");
  background-size: cover;
}
.image.image5 {
  background: url("https://react-pretty-carousel.herokuapp.com/static/media/photo-5.903bd4b4.jfif");
  background-size: cover;
}
.image.image6 {
  background: url("https://react-pretty-carousel.herokuapp.com/static/media/photo-6.402110ff.jfif");
  background-size: cover;
}
```

Here I am just assigning a specific image to each `div` and then setting it's `background-size` to `cover` so that the image's width would be set to the `div`'s width automatically.

If you need the whole code, with the files and everything literally then visit this [sandbox on CodeSandbox](https://codesandbox.io/s/react-pretty-carousel-xulxf?file=/src/App.js)

Step 4: Voila!

That's it, yeah literally, that's how easy it was to add this beautiful carousel to your website! You can now simply run the code using `npm run start` or `yarn start` and see the carousel added to your website. You can use this framework to show image sliders and testimonials that most portfolios have these days, it will look epic on your website!

Now again the whole code of whatever I taught you until now is available right [here](https://codesandbox.io/s/react-pretty-carousel-xulxf?file=/src/App.js).

## How do I contribute?

Oh so you're one of those people who love contributing huh? Well you can simply then contribute by visiting the [Github repo](https://github.com/Jaagrav/react-pretty-carousel)!

You can star the repo of course and if you face any issues or problems, you can simply [create an issue](https://github.com/Jaagrav/react-pretty-carousel/issues) or [make a PR](https://github.com/Jaagrav/react-pretty-carousel/pulls) in order to contribute.

## Is there a video tutorial?

Yeah definitely there is, I always make video tutorials so users and developers both understand how to use what I made,

<iframe src="https://www.youtube.com/embed/oE97LMjPz5I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Do check it out and let me know if you liked the carousel or not! If you did, did you end up adding it to your project?

## Conclusion

Now to be honest, creating react-pretty-carousel wasn't actually as easy as I anticipated before finally starting to work on it, it took me about two hours to get to the point where I could make the normal carousel by dragging it with the help of my pointer, I also tried my best to not break any React rules which thankfully I didn't but in the end it all works! And that's what matters the most, right? 😂

I really look forward to what you create with this carousel and how you implement it to your website, I am actually pretty curious to find out, feel frr to [DM me on Twitter](https://twitter.com/xJaagrav/) in case of any issues that you might face, I am there to help you, 87% of the time.

Stay tuned because in my next article I'll be creating something with an arduino, with which you'll be able to control your TV with your feet, here's a sneak peek!
