---
title: Fractal Tree
menu: main
weight: -270
---

## Introduction

The purpose of this project is to build a fractal tree. From the get-go let's
explain what a fractal is. To begin with, a fractal is the infinite repetition
of a certain pattern - in this particular case our pattern is the "Y" symbol.
This concept may not seem clear for now but don't worry - it will be soon!
If you have trouble with fractals you can find more about it
[`here`](https://mathigon.org/world/Fractals) before starting this tutorial.

Now that you know what a fractal is, a fractal tree is simply a fractal
that builds a tree as it is being created. Okay, after this basic
explanation let's get it started!


![](finalTree.png)

At the end of this tutorial you will obtain the power to make one of these.
Incredible, don't you agree?

### Setup

#### Web Browser

Software that lets you access the internet, some examples of web browsers are:

* [`Google Chrome`](https://www.google.com/chrome/)
* [`Mozilla Firefox`](https://www.mozilla.org/pt-PT/firefox/)
* [`Microsoft Edge`](https://www.microsoft.com/pt-pt/windows/microsoft-edge)
* [`Safari`](https://support.apple.com/downloads/safari-for-windows)
* [`Opera`](https://www.opera.com/pt-br)

Many others exist, but these are the most user-friendly and most commonly used.

#### Text Editor / Web Editor

So, as a writer needs their pen and paper, you will need your own tools,
or, in this case, you need an IDE, or, to put it simple, a text editor.
"And what is a text editor?" - you may ask. Well, it's the place where
the magic happens, where you will write your code, where you will fail,
where you will sometimes (most of them) rage but, mainly, where you will
succeed. Even though it's hard to hustle, never give up and keep on trying!
In the long run, it will be worth it. Some examples of text editors are
the following:

* [`Sublime Text 3`](https://www.sublimetext.com/3)
* [`Visual Studio Code`](https://code.visualstudio.com/)
* [`Atom`](https://atom.io/)
* [`Notepad++`](https://notepad-plus-plus.org/download/)

And there are a million others around the internet - make sure you
use your favorite!

### Basics

For this project, you will need some acquired knowledge. Since this
tutorial is amazing, the knowledge will be given for free. That's right,
fully free.

**Note:** To define/use functions you need to call them. That's pretty simple,
here is a small example.

```javascript
function whatever() {

}
```

Obviously, this function does nothing because it's empty.

#### CreateCanvas

Just like in painting, you'll need some sort of place to be your canvas. As the
name suggests, let's create one. So, what should you do to make use of this
function? Basically, call `createCanvas` with the desired parameters. First
you'll need to pass the height, followed by the width, and finally, you have
your fully functional canvas. So let us create some art! And yeah, programming
is art. More info [`here`](https://p5js.org/reference/#/p5/createCanvas).

**Fun fact** about the canvas you have just created: its height grows to
the right, like it usually does, but its width doesn't grow upwards, like you
are used to. It grows to the opposite side, or downwards. Why does it happen?

Well that's a challenge for you to overcome, so take it into account
when creating your tree.

Example:

```javascript
function canvas() {
    createCanvas(200,200);
}
```

In this example the canvas has a 200x200 dimension.

#### Background

Since a blank canvas is boring and programming is not, you need to give it a
little bit of life. To do so, you use a background that allows you to edit your
canvas color within a range of 0 to 256 - 0 being black and 256 being white,
respectively. Read more [`here`](https://p5js.org/reference/#/p5/background).

Example:

```javascript
function color() {
    background(0);
}
```

The background is now Black.

#### Line

With your "base" now set, let's learn how to draw. In this case we will be
drawing lines - and what do you need to draw a line? Simple answer: exactly two
points, no more, no less. So give the function two points (height, width) and
let the `line` do its job by connecting those points. See? As easy as it can be.
See more [`here`](https://p5js.org/reference/#/p5/line).

**Note:** Take into account that you need to give one point and then another so
make sure that you only have two coordinates.

Example:

```javascript
function draw() {
    line(0,0,10,10);
}
```

Here, the first point is (0,0), the second one is (10,10) and `line` joins them.

#### Translate

Did you ever wish to change the origin of the axis from the typical (0,0) to
whichever origin you saw fit? Well, the function `translate` is
here to make your dreams come true. "And what's the point of it?" - you may
ask yourself. Later on, while creating your tree, you will understand, so
for now just know that it will help you a lot. For more `translate`
comprehension go [`here`](https://p5js.org/reference/#/p5/translate).

Example:

```javascript
function translation() {
    translate(10,10);
}
```

Origin of the axis is now at (10,10).

#### Rotate

Almost done with the basics - we're just missing the ability to `rotate`.
`Rotate`, as its name suggests, allows you to rotate the axis.
The rotation made is based on the angle passed as a parameter.
Some more `rotate` info right [`here`](https://p5js.org/reference/#/p5/rotate).

Example:

```javascript
function rotation() {
    rotate(PI/4);
}
```

The axis is now rotated 45 degrees.

You are now ready to start coding!

## Start

Since the starting line has to be somewhere, with the usage
of `createCanvas` and the `background` (explained before), we add
in here a snippet of code to ease your burden of building one
from scratch.

```javascript
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
}
```

The "Base" is now ready for improvement. The first step to build the
tree is to draw its trunk. To begin with, let's use `line`. But...
where should you do it? Since the canvas size is 400x400, let's do it
by the bottom middle part of the canvas, which is 200x200 and with
length 100, and to make it simpler to understand let's create another
function with it and call it to the branch. You will notice that it will
be useful later on, so let's just build it for now.

```javascript

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    stroke(255);
    branch();
}

function branch() {
    line(200, 400, 200, 300);
}
```

Don't give too much importance to stroke, as it is simply the color
desired for the line. In this case, white.

If everything is done correctly it should look like this:

![](trunk.png)

The trunk is now built. The next step is to draw branches. To do so,
using a variable is optimal, since lots of branches will be needed.
And to create the tree just do it recursively - it is the best way to
do it. And how do would you do it? First and foremost, to define a
variable you must do it inside the parentheses of the function you want
that variable to be inside of. In this case, its branch. Let's name
it `len`, since it will define the length of branches. Let's try then
to write the same code but now with the variable `len`.

```javascript
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    stroke(255);
    branch(100);
}

function branch(len) {
    line(200, 400, 200, 400 - len);
}
```

**Note:** when calling the function branch, you'll notice that the value
of `len` is 100. Drawing lines from a specific point, in this case from
(200, 400) to (200, 300), is an absolute pain to deal with since the goal
is to draw a tree recursively. A simple way to do it is simply starting to
draw from the axis origin and then define a pattern. So, what should you
use to do so? The answer here is translated defining the axis origin as
the bottom middle and then making the tree grow from there. But by doing
this you also need to change the `line`, because it's not a specific
point anymore. But the axis origin is much easier, right?

```javascript
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    stroke(255);
    translate(200, 400);
    branch(100);
}

function branch(len) {
    line(0, 0, 0, -len);
}
```

**Note:** remember that the axis is inverted so `len` must be negative,
so that's why it should be `-len`.

## Development

Trunks are known to be stable, bulky and strong, so that it grows to
be a big tree. It is only by growing big that its branches appear and
thus compose the tree as it is. That way, let's then draw branches on the tree.
Going straight up isn't really recommended as branches don't go that way,
so let's go sideways. Then, if you feel like it, you can also change the
angle you will draw into, by using the `rotate` tool, which is the way to go.
For now, and just for testing measures let's only go simply to the right.
Now that `rotate` is used there's only one thing left before drawing the
branch. What is it? Correctly moving the axis origin to the trunk's top
by using `translate` again. Now that all conditions are met let's draw
some hecking branches.

```js
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    stroke(255);
    translate(200, 400);
    branch(100);
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    rotate(PI/4);
    line(0, 0, 0, -len);
}
```

![](branch.png)

Your tree now has a new branch. But if you really wanna make a real tree
branch as you go up, it will grow smaller... so how do you make it possible?
Simple! Just check on how you created your `line`, again. Well, that's
basically doing the branch function, so instead of doing a `line`,
just call the branch function with a smaller value or, by other means,
multiply the initially given number by any other decimal another that
is bigger than 0 and smaller than 1. Let's use 0.7 here.

```javascript
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    stroke(255);
    translate(200, 400);
    branch(100);
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    rotate(PI/4);
    branch(len * 0.7);
}
```

The code above generated the following:

![](crash.png)

Well, it's no surprise there's no limitation or condition to make it stop when
it creates an infinite loop and eventually overflows. So let's make a stop
condition so it stops and doesn't explode anymore, making us scratch our heads.
In order for it to happen use the syntax `if()` and inside, the condition you
want for branch to stop. Here let's use `len > 4`. Implement the if condition
before, with the branch inside, and it will stop when `len` is equals or is
bigger than 4, in this case. Let's check it out!

```javascript
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    stroke(255);
    translate(200, 400);
    branch(100);
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    rotate(PI/4);
    if (len > 4) {
        branch(len * 0.7)
    }
}
```

![](tail.png)

See, it didn't explode anymore! But what if you want to adjust the angle without
changing it every single time? First let's make the angle a variable so it's
easier to adjust. To do so so, creating a slider is the way to go. And how do
you make a slider?. Use `createSlider` (take into account that `createSlider`
needs four arguments), whereas in the first two  arguments you put
the slider range. Here, it will be from 0 to 180 (from this point onwards let's
stop using radians and start using degrees. You should use `angleMode(DEGREES)`,
which sets the angle to degrees. If you have difficulties doing so click
[here](https://en.wikipedia.org/wiki/Radian)), then on the third argument put
the starting point. Here we'll be choosing 45, and finally how much you want to
move by changing the slider. 1 seems okay here, so let's implement this feature.

```javascript
let angle;
let slider;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    slider = createSlider(0, 180, 45, 1);
}

function draw() {
    background(220);
    angle = slider.value();
    stroke(255);
    translate(200, 400);
    branch(100);
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    rotate(angle);
    if (len > 4) {
      branch(len * 0.7);
}
```

In case you are wondering about `angle = slider.value();`, it is simply saying
that the slider created is applied to the angle range. Also let is used to
define thevariable name instead of creating a function. And, the best of
all... less work.

The right side is now done so to do the left side you simply `rotate` to
the oppositeside by doing -angle and calling branch again with everything
on the if condition as done before.

```javascript
let angle;
let slider;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    slider = createSlider(0, 180, 45, 1);
}

function draw() {
    background(220);
    angle = slider.value();
    stroke(255);
    translate(200, 400);
    branch(100);
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);

    if (len > 4) {
      rotate(angle);
      branch(len*0.7);
      rotate(-angle);
      branch(len * 0.7
    }
}
```

![](reverse.png)

It still doesn't work.

## Conclusion

Why did it work so well? Remember the `translate` function. Since you
always changed the "starting" point to the top of the branch it doesn't come
back to interfere with the left side. Instead it goes right and builds the
pattern only in there, creating a funny but not intended result. It is quite
easy to solve tihs issue - use `push` and `pop`. `Push` saves the initial
position that you were in, before applying the if condition. Then you do branch
like usually and when the if condition makes you stop you `pop`, which means
you go back to the state saved in `push`. Up to this point you have only done
the right side of the tree - for the left side just `push` and `pop` again but
this time to the negative angle and magic will happen.

```javascript
let angle;
let slider;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    slider = createSlider(0, 180, 45, 1);
}

function draw() {
    background(220);
    angle = slider.value();
    stroke(255);
    translate(200, 400);
    branch(100);
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 4) {
        push();
          rotate(angle);
          branch(len*0.7);
        pop();
        push();
          rotate(-angle);
          branch(len * 0.7
        pop();
    }
}
```

![](finalTree.png)

Your hard work paid off! The tree is finally done. This is a basic one, but now that
you have this basic knowledge on how to create a fractal tree, try to improve it by
making a Christmas tree... or give your imagination/creativity wings and fly!
Create your own and unique tree, and let us know how it went!

## Bibliography

* [p5.js Documentation](https://p5js.org/reference/#/p5/background)
* [Learn javascript](https://javascript.info/) 
