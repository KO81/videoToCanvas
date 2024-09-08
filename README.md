# videoToCanvas
script to play videos via a provided HTMLCanvasElement
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
