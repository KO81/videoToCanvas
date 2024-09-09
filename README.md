# videoToCanvas
script to play videos via a provided HTMLCanvasElement
![Screenshot of a videoToCanvas object in action.](https://drive.google.com/uc?export=view&id=1W5m9U9H7SyVR-7xdv2qL3xG4vHt4aHGY)
# Well you might think, any body can do this.
this one does.
1. aligns both the poster and video centered within the HTMLCanvasElement. It automatically scales both to fit the entire content into the HTMLCanvasElement.
2. It automatically resizes and scales the content on resize.
> Comes with build in icons, ['PLAY', 'PAUSE', 'STOP', 'MUTED', 'SPEAKER'], by a set of [16, 32] pixels, by a set of ['dark', 'light']
3. Both icons and progress bar are drawn on the HTMLCanvasElement, so no extra besides an maybe later canceled HTMLAudioElement is required within the markup itself.
> ***HTMLAudioElement is no longer required !!!***
4. HTMLCanvasElement have costum methods applied to it.
5. It comes with a build in event listener disguise feature, so nobody but you knows what this event does.
6. by choosing the internal event element, nobody can cancel the event listener in the console window.
7. It comes with three build in observers, and core element watchers.
8. Seemlessly switching between video sources.
9. Build in uncancelable intervene method, to show ads for exsample.
10. Internal event builder, so that all events emitted by this have the same build up.
11. Internal Error event handler which can be disabled.
12. Build in source handler for the poster and the video url.
- the poster can be either a url, a loaded image or a none empty HTMLCanvasElement.
- video url gets automatically fetched
- so no other items are needed to start this project.
13. Independable functions, All functions are written in such a manner, that they are independable form other functions. So if one function is failing or has no return, only functions that are called via this function doesn't get executed, while all others will function as surposed.
14. You can enable or disable the project at any time.
This and many more features are already within this project.

## __read more__
### mozilla pdf and chrome pdf
[![mozilla pdf image](https://drive.google.com/uc?export=view&id=1K5Y_H4NV7F3bb-q28_UmeC07ahx1C58Y "video to canvas mozilla pdf")](https://drive.google.com/file/d/1MAE2STSTWwmOM6e7uiJmWdTAxhz9CK2O/view?usp=sharing)
[![chrome pdf image](https://drive.google.com/uc?export=view&id=13otbfrTgu5_u6m7gn9Z39KH2JimlRWpf "video to canvas chrome pdf")](https://drive.google.com/file/d/1vK_-tLTMjFFm4gt4rMoTX3uExVLShDee/view?usp=sharing)

mozilla pdf has a size of 2.6 mb, has a lower resolution.

chrome pdf has a size of 17.1 mb, has a higher resolution.

# versions
standart == minimized
- This version will have all classes and functions.
- Will include PRIME, NAME & HELP, and functions which only are exposed to them.
- filename exsample : __filename__.js

max
- Same as 'standart', but designed to be more readable.
- Please note! This version will use more bandwidth, since it is quite bigger then the 'standart' version.
- filename exsample : __filename__.max.js

standart trimmed
- This version will not have all classes and functions, only necessary functions will be keeped.
- Will not include PRIME, NAME & HELP, and functions which only are exposed to them.
- filename exsample : __filename__.trim.js

max trimmed
- Same as 'standart trimmed', but designed to be more readable.
- filename exsample : __filename__.trim.max.js

# about the controls attribute

![Screenshot of a canvas markup.](https://drive.google.com/uc?export=view&id=1qwd2Qt_x6LOu838ld2dof0lMsbku3HUe)

the ``controls`` attribute behaves like it does on a ``HTMLMediaElement``, if present icons to control the media are shown.
if not the ``HTMLCanvasElement`` will not react on user interaction.

## about the appended canvases.

the first one is where the video is drawn on, the second one is where the navigation is drawn.
- well, you might think anybody can use ``captureStream`` method, no this is set to ``HTMLCanvasElement.prototype.captureStream=null;`` ergo not possible.
- onload changes, u can't just take a snapshot, this is even harder todo since, the canvases getting replaced by new ones on almost any event. and eventlisteners the opponent did set are gone.

# main features


#### Uncancelable events

- If you add your event handlers to the internal event object, then nobody but you can cancel this event, as it is not a part of the html markup. Ergo uncancelable. No event will emit any build in secret.

##### Disguised event names

##### If you choose the build in disguise object, it's even harder to get other to disble or listen on any event.

- If the two options above are in use, you get both uncancelable events and disguised names, this is pure ownerchip of your video withOut videoTag object. You may wonder how, disguised names are uniqe for every object you start, each object gets identified by a randomized string only you know, what the string is. And of course, the very same html object cannot be run twice as it is marked permanently, and it will throw an global error if tried.

#### Three build in observers & and core element watchers

- Upon enabling your project, your element and it's parent gets watched over by three different type of observers.

- A mutation observer, which will correct he given attributes to it's old value, and will thereby emit an event when it's corrected.

- A resize observer, which helps to get the canvas elements (your canvas pluss the fake build in canvases), dimensions and internal properties in alignment.

- A intersection observer, which it's only purpose is to get you event notifications.

- Core observers / watchers, will keep track of the core elements exposed on the html markup, when your object is enabled. Those will also notify if something happen to your object.

#### Icons for projected canvas buttons

- It comes with a build in image maker, for the play, pause, stop, speaker and muted icons. In two different sizes, aka 16 by 16 pixels and or 32 by 32 pixels, those are in groups of a dark and a light set. With a total of 20 images generated internally only once, upon enabling it.

- It detects automatically if the user prefers dark mode, and chooses by the canvas size if ether the 16 by 16 pixels or if the 32 by 32 pixels icons should be used.

#### Build error event handler

- The feature is not the event handler itself, but you can disable it by setting a global 'throwError' within your window. As long as this is undefined, it will throw errors.

- All errors thrown by this, will be a ReferenceError. So it's Easier to keep track of those.
Ejectable class objects

- Both the HELP and PRIME class object, can be removed to save bandwidth from your project, without causing any issues.

#### Uncancelable intervene possibilities
![Screenshot of a canvas intervene and interveneEnd method.](https://drive.google.com/uc?export=view&id=1W2l3EG3BdpgdExNShsHoideRa46Ztu6P)

- It comes with a build in intervene functions and objects, which gives you the possibility to run ads and commercials, at your will.
  
- - this is ment to show your advertisement.
  - all other events and methods are paused untill the ``interveneEnd`` function with the earlier uniqe secret float returned that the function and mthods are unlocked again.

#### Videos & Posters

- Videos and posters getting automaticly adjusted and centered to fill the entire canvas element as much as possibble.

#### Events and their properties

- All events, getting emitted by the same event module, So their build up, and outcome, will always be the same.

- So it will be easier for you, to predict the outcome of an event.

#### Seemlessly switching video source.

- The playing canvas element gets paused, switched to the new source immediately.

- If the connect function detected, that a canvas element was playing, it will auto start play the next video source.

#### Independable functions.

- All functions are written in such a manner, that they are independable form other functions.

- So if one function is failing or has no return, only functions that are called via this function doesn't get executed, while all others will function as surposed.

# about the ``videoToCanvasObject`` 
![Screenshot of a canvas intervene and interveneEnd method.](https://drive.google.com/uc?export=view&id=1xzEyRLsxsD8T-SV7MVA9ysoEjWnXQJ9l)

with this ``new videoToCanvasObject`` you can start your project by calling the ``_start`` function, if allarguments are set and are valid, you can interact with the object after the readyState event emitted a true in return.

- ``_clear`` function will clear your object within the class object.
- ``_disable`` function will disable your object from being interacted with.
- ``_enable`` function will enable your object to be interacted with.
- ``_setPoster`` function let's you change the poster at any time without interruption of a playing element.

the ``_start`` function runs the ``_setPoster`` function and the ``_setSrc`` function within internally.

# about the ``videoToCanvasSourceObject`` 
![Screenshot of a canvas intervene and interveneEnd method.](https://drive.google.com/uc?export=view&id=1JeGzkBlYakXUoEBRE9rqPfIb7ksqXvEw)

this is the object you get in return when you run the ``_start`` function.

disguise object
- __event object__ within stores the eventnames and their disguised counterparts.

enabled
- is the enabled ``boolean``

event <__video__>
- is the internal event emitter

observers
- are three different observers to ensure your project works like it should.
  - those comes with custom functions
  - - like observeAll and disconnectedAll
    - you can even disable or enable them individually

poster
a poster can be an image url sring, a loaded image or a none empty canvas element.
the image has to be at least 122X51 px.
- all posters are getting converted to an ``Uint8ClampedArray`` for easier handling within the object.
- posters getting scaled 1to1 and resized to fit the entire canvas as much as possible.

randomTargetArray
is an ever rotating context('2d') array

ready
is set when the readyState is changed either from ``false`` to ``true`` or circumvent.
- is the readyState ``boolean`` which is a getter only property

target
is your selected ``HTMLCanvasElement``

videoIn
is a ``CanvasSourceObject`` which includes when video source was successful added a
- video
- time

object with all details geathered about the video source
- _source will always be a blob for easier handling within

- _connect function with that function you can connect a new ``CanvasSourceObject``

# about the ``CanvasSourceObject`` 
![Screenshot of CanvasSourceObject.](https://drive.google.com/uc?export=view&id=1sWooxqQW-S9kEI0jeP6ks1eBmtC05bnb)

_connect function with that function you can connect a new ``CanvasSourceObject`` to your ``videoToCanvasSourceObject``

_source object will be filled by the ``_src`` function.

_track is yet unused but will in later PRIME versions handle sub text tracks objects. 

# about the ``HTMLCanvasElement`` costum methods
those are async functions without an actual promise, this done only for you can run a `HTMLCanvasElement`.`play()`.`then` function based on the outcome of the method.
![Screenshot of a canvas costum methods.](https://drive.google.com/uc?export=view&id=11Y0WWewFOqnglUxuWczt0_8r_rxB6laG)

| method                | method does                                                       |
|-----------------------|------------------------------------------------------------------:|
|intervene()	          |will pause the canvas playing video element (if not paused already), and sets a lock on the lightweight renderObject. If called, more than one time on the object, it will throw an interveneError on your or all known Prime objects.It will return an array, with status and a new secret float. Which is needed later, to unlock the canvas methods.|
|interveneEnd(float)    |will unlock the lightweight renderObject, if the right secret float was past, otherwise it will throw an interveneError on your or all known Prime objects.Please Note! If you should forget to run this function before the disabling function, ca. ~256 bites of data will not be garbage collected.|
|mute()	                |will mute the canvas playing video element. It will return either null, if intervened, or if the canvas playing video element is muted or not.|
|pause()	              |will pause the canvas playing video element. It will return either null, if intervened, or if the canvas playing video element is paused or not.|
|play()	                |will try to play the canvas playing video element. It will return either null, if intervened, or if the canvas playing video element is playing or not.|
|seek(toTime=0)	        |will try to seek to the currentTime value given by the toTime argument of the canvas playing video element. It will return either null, if intervened, or if the canvas playing video element was seeked to or not.|
|volume(value=0.5)	    |will try to set the volume to the canvas playing video element. It will return either null, if intervened, or if the canvas playing video element has applied the volume to or not.|
|stop()	                |will stop the canvas playing video element, set the video currentTime to 0 and will try to display the poster. It will return either null, if intervened, or if the canvas playing video element is stopped or not.|
|unmute()	              |will unmute the canvas playing video element. It will return either null, if intervened, or if the canvas playing video element is unmuted or not.|

# easter egg $${\color{yellow}prototype}$$ $${\color{blue}function's}$$ 

there are some nifty $${\color{yellow}prototype}$$ functions build in, have fun coding.
