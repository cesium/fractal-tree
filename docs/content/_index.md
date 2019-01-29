---
title: Fractal Tree
menu: main
weight: -270
---

## Introduction

This projects has the goal of making a factral tree. From the get go lets explain whats a fractal, well a fractal is a infinite repeation of a certain patern in this particular case our patern is the "Y" this may not seem clear now but it will soon don't worry. Now that you know what a fractral is a fractal tree is simply a fractal that makes a tree as its final form. Okay after this basic explanation lets get it started!

### Setup

#### Web Browser

The method used to access the internet some examples of web browsers:
  
* Google Chrome
* Mozila FireFox
* Microsoft Edge
* Safari
* Opera

And so many others but these are more common

#### Text Editor / Web Editor

So as a writer needs his pen and paper, so you need yours, in your case its an editor, place where magic happens, where you write your code, where you fail, where you sometimes(most of them) rage but most mainly where you succed so even though its hard to hustle never give up and keep it up in the long run it will be worth it. Some examples of text editors are the follings:

* [Sublime Text 3](https://www.sublimetext.com/3)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Atom](https://atom.io/)
* [Notepad++](https://notepad-plus-plus.org/download/)

And a milion of others have fun searching for them...

### Basics

For this Project you will need some acquired knowladge since this tutorial is amazing the knowladge will be given for free

#### CreateCanvas

Just like in a painting you need some sort of place to be your canvas like the name sugests, insane right? So what do you do to use this funcion basicly do createCanvas next to it in paranteses put first the heigth followed by the weigth obviously with a comma in the middle, finally you have your canvas so lets begin to create art (yeah programing is art).

Note:
fun fact the canvas you just created its heigth grows to the right like it usually does but its weigth doesn't grows upwards like you are used to, it grows to the opposite side or downwards(why does it happen? well thats a chalange for you to overcome) so take it into account when doing your tree.  

Example:

```javascript

createCanvas(200,200);

```
in this example the canvas has a (200,200) dimension

#### Background

Since a blend canvas is boring and programing is not you need to give it a little bit of life, to do so you use background that allows to edit your canvas color from 0 to 256, being from black to white respectively.

Example:

```javascript

background(0);

```
The background is now Black yeah

#### Line

With your "base" set now lets learn how to draw in this case lines,so what do need to draw a line ? exactly two points, so give the function two points (heigth,weigth) and let "line" do its job (unite those points) see as easy as it can be.

Note:
have into account that you need to give one point then another so have into consideration you only have two coordinates you work with so line can only have four arguments (numbers) and three commas

Example:

```javascript

line(0,0,10,10);

```

Here the first point is (0,0) the second one (10,10) and line unifies both

#### Translate

Ever wanted to change orgin of the axis from the good old (0,0) to whatever origin you wanted ? well translate make your dreams come true, whats the point you may ask yourself well latter while creating your tree you will understand so take this into account that will help you a lot, to use it up to this point its bread and butter do translate and in parenteses choose new coordinates to its center

Example:

```javascript

translate(10,10);

```

Origin of the axis is now (10,10)

#### Rotate

Almost done with to the Basics and to end it nothing better than rotate that allows you to rotate the axis,the rotation made is made based on the angle given to rotate.

Example:

```javascript

rotate(pi/4);

```

the axis is rotated now 45 degrees
