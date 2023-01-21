---
title: Drive a Tesla Cybertruck or literally any car on your browser with Threejs
publishedOn: February 23, 2022
excerpt: In this article, we would be building [this](https://cybertruck-rv.vercel.app/), a 3D Tesla Cybertruck that can be driven with your arrow keys and WASD keys on your browser.
readingTime: 8 mins
---

## Before we begin

In this article, we would be building [this](https://cybertruck-rv.vercel.app/), a 3D Tesla Cybertruck that can be driven with your arrow keys and WASD keys on your browser. We would be building this project with the help of [RV-Engine](https://rv-engine.vercel.app/), which is a browser based Raycast Vehicle Engine.
[![Image of Raycast Vehicle Engine](https://user-images.githubusercontent.com/52719271/128848701-ccee33e9-4958-4c59-b8ac-92b3bd3a1e45.gif)](https://rv-engine.vercel.app/)

This project will require you to have some knowledge in both [Threejs](https://github.com/mrdoob/three.js/) and [Cannon-ES](https://github.com/pmndrs/cannon-es). Although since what we're building here would built on a browser-based engine, you don't need extreme knowledge about these libraries, cause you can simply download all the car code that you tweak on the engine and install it using `npm i` on your computer. Read this article carefully to understand how to drive your 3D 4-wheeler vehicle model on the browser.

## Don't want to read this article?

Check out the video version for this article on my youtube channel!

<iframe src="https://www.youtube.com/embed/o_Uf6blOQFg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Introduction

Alright, so were to begin. You all must have seen developers all around the world making some really awesome projects with threejs. Now these projects have something pretty magnificent which we call **Physics**. Some examples for 3D physics projects would be,

### [Bruno Simon](https://bruno-simon.com/)

The legendary [Bruno Simon](https://github.com/brunosimon)'s portfolio, which features a 3D car that the user can drive around this 3D world, run into bricks and knock stuff off. This project uses [CannonJS](https://schteppe.github.io/cannon.js/) by [Stefan Hedman](https://github.com/schteppe) for physics support.
[![Image of Bruno Simon's Portfolio](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rpr1nuli1eqdxtauwf9u.png)](https://bruno-simon.com/)

> Bruno has an awesome course called [ThreeJS Journey](https://threejs-journey.com/) which helped me out personally in understanding the basics of threejs and build this project all by myself. I'd suggest you to definitely consider checking out his course, cause it's the best threejs course you will find out there for Javascript beginners.

### [Racing Game](https://racing.pmnd.rs/)

The open sourced racing game developed by [Poimandres](https://github.com/pmndrs) and other contributors on [Github](https://github.com/pmndrs/racing-game). The game features a 3D car in a track, and the user is supposed to reach the end of the track by driving the car to the end of the track as soon as possible. This project uses [Cannon-ES](https://github.com/pmndrs/cannon-es), a physics library which is a fork of the original [CannonJS](https://schteppe.github.io/cannon.js/) by [Stefan Hedman](https://github.com/schteppe), currently being developed in house by the developers and other contributors of [Poimandres](https://github.com/pmndrs).

[![Image of Racing Game by Poimandres](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/klh194r0i3q6j2c4rnau.png)](https://racing.pmnd.rs/)

## About

Now enough of showing other physics based 3D projects. You might be wondering what is this article exactly about?

Well in both of the above projects as you might have noticed, one thing is common and is also the MC of the games, A CAR! Or as we, the developers like to call it, a Raycast Vehicle. Now building a raycast vehicle is super difficult cause it's one of the most complex features of a physics library. Although there are courses on how you can create a raycast vehicle, most of them are paid or they just don't make sense. Although I would say, that [Cannon-ES](https://github.com/pmndrs/cannon-es) has got a pretty dynamite documentation but it took me almost a week to create my first raycast vehicle and drive it on my browser.

> In fact, [Bruno Simon's Portfolio](https://bruno-simon.com/) took him about 3 months to develop before he released it to the public.

Physics in itself is pretty hard to understand when you're trying to make it work on your browser, and when you're adding some threejs magic to it, well it just makes everything a little bit more harder.

Everybody hates going through the docs, well at least most of the developers I know do hate reading docs quite a lot, but threejs, although it is very popular and the community using it is constantly growing, there is not much information on how to build certain things online, unless you're figuring out things by yourself. I had to go through that painful journey of trying to figure out, how to get a raycast vehicle up and running on my browser. There's a [course](https://www.udemy.com/course/create-a-3d-car-racing-game-with-threejs-and-cannonjs) by [Nik Lever](https://github.com/NikLever) on how to create a 3D car racing game with threejs and cannonjs. I almost got to a point where I was about to buy his course, which I am sure is excellent, but again it's not free. After going through the docs a little bit more harder and with the help of Poimandres' developers on Discord and going through [Bruno's code for his portfolio](https://github.com/brunosimon/folio-2019), I finally figured out how to get a raycast vehicle up and running on my browser. Boy did it feel good, but it took a lot of effort since the docs aren't that helpful, and the best way to get something working on your computer is to basically play with a project which is already built using the same technology you're trying to implement and trying to reproduce it for your project.

## What is Raycast Vehicle Engine?

Once I was done with setting up my first raycast vehicle, I was quite proud of myself. Although, I did wish that there was a website where I could upload my car model, and with some tweaks, generate all the code required to build a raycast vehicle. Now generating code on the browser and downloading it as files and folders is something which is not very easy to develop IRL, but is a very fun and plausible problem to solve. And that's how the idea for the [Raycast Vehicle Engine](https://rv-engine.vercel.app/) took birth. A browser based engine, where a developer can upload a car model, make some tweaks in the code for the vehicle with the help of a GUI, and when satisfied with the tweaks, easily download the code, install using `npm i` and run using `npm start`. Sounds pretty interesting, right? Well that's just the beginning.

## Let's build a Cybertruck!

In order to build a Cybertruck which can be driven with your arrow keys on your browser, first we need a Cybertruck! More specifically a chassis model and a wheel model for a Cybertruck. You might be wondering, where am I supposed to get a 3D Cybertruck model from, well you can easily download it from the link given below.

> [Cybertruck Model](https://mega.nz/folder/bsxEETwS#RfiiE-kyKvBJBO2qEFNg5w) > [![Image of the original Cybertruck model by Polyducky](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bwy81myis71rjf7k3zdt.png)](https://mega.nz/folder/bsxEETwS#RfiiE-kyKvBJBO2qEFNg5w)
> I had found this model on Sketchfab and would also like to thank it's creator, [PolyDucky](https://sketchfab.com/salphytheunemployed) who made the [original model of the cybertruck](https://skfb.ly/6QWrS), you should definitely go check out his other amazing 3D models on Sketchfab!

Moving on, the next thing you're supposed to do is simply drag and drop the chassis and wheel models to the respective upload inputs.

![Image of model upload input boxes where 3D model GLTF files can be dragged and dropped into](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hk9mywsqu56bnzzmzlmp.png)

Now if you're trying to build using some other car model, keep these few things in mind,

- The model cannot be a single car file, you will have to separately upload the chassis and the wheel or else the RV engine won't work and have weird issues. You can again use blender in order to separate the chassis from the wheels like I did for the Cybertruck by myself on blender.
- The models you upload must be GLTFs. If you don't know how to convert your model to GLTF, I would recommend you to [watch this youtube video](https://youtu.be/9GDQqP4is_U).

Once you're done uploading your 3D models, watch the following youtube video that I have created in order to better understand how you can create a 3D Cybertruck on your browser.

<iframe src="https://www.youtube.com/embed/o_Uf6blOQFg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

And voila that's it! I am pretty sure you have understood on how you can create your own cybertruck on the web browser by watching the above video. Pretty simple right? What took me 2-3 days to develop will take you only 10-20 minutes with the help of the [Raycast Vehicle Engine](https://rv-engine.vercel.app/).

## What's next?

Well now that you've finally made a 3D car which can be driven with the help of arrow keys on your web browser. You might be wondering, well what do I do next? You can build an entire world around your car model, a world where you can have more 3D objects everywhere, where your users can easily drive around, knock stuff around and basically play around to explore more like Bruno's portfolio. There's unlimited amount of things you can build with physics and threejs, and I am sure you will make something that would be super creative and mind-blowing because that's how threejs and webgl is. If you're reading this article and you don't have any idea on how to add more and modify the 3D world and add some more physics based 3D objects, I would recommend you to definitely check out Bruno's Course, [Threejs Journey](https://threejs-journey.com/) to better understand not only this article but also threejs and cannonjs in all.

## Conclusion

RV engine is free and open source, you should definitely check it out on github and don't forget to leave a star cause it would really mean a lot to me.

# [Raycast Vehicle Engine Github Repo](https://www.github.com/jaagrav/raycast-vehicle-engine)

Don't forget to [follow me on Github](https://github.com/Jaagrav) to see the stuff I create and star. I really enjoy web development and webgl to create interactive and immersive experiences. This project took me in overall a month to develop, and would not be possible without the following awesome opensource projects,

- [ThreeJS](https://threejs.org/) - JavaScript 3D library
- [Webpack](https://webpack.js.org/) - Module bundler
- [Babel](https://babeljs.io/) - ES6 to ES5 transpiler
- [Cannon-ES](https://pmndrs.github.io/cannon-es/) - 3D physics engine
- [Guify](https://github.com/colejd/guify) - GUI framework
- [JSZip](https://stuk.github.io/jszip/) - JSZip is a javascript library for creating, reading and editing .zip files, with a lovely and simple API.
- [Stats.JS](https://github.com/mrdoob/stats.js/) - JavaScript Performance Monitor
- [File Saver](https://www.npmjs.com/package/file-saver) - Save files to disk

There are many more awesome features that I am planning to add to the engine, and you can help me out with it too. So do [fork it on github](https://github.com/Jaagrav/raycast-vehicle-engine). Thanks to everyone that contributed to this project and made it possible and thanks to you for reading this article.
