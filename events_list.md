#### c.init event list
- 0: "stalled"
- 1: "waiting"
- 2: "loadeddata"
- 3: "loadedmetadata"
- 4: "click"
- 5: "canplay"
- 6: "canplaythrough"
- 7: "emptied"
- 8: "ended"
- 9: "seeked"
- 10: "seeking"
- 11: "pause"
- 12: "play"
- 13: "progress"
- 14: "ratechange"
- 15: "volumechange"
- 16: "timeupdate"
- > 17: "wheel" currently not doing anything.
- 18: "resize"
- > 19: "dblclick"  currently this event is getting ignored.
- > 20: "contextmenu"  currently not doing anything.
- 21: "error"
- 22: "durationchange"
- 23: "load"

#### additional events
pushed into a __new c.init__ array upon creation of a new 'videoToCanvas' object to build a new 'disguiseObject'.

- > ~~"testConfigCalled" most likely to be removed from future releases~~ is removed for good.
- "isPrimeCalled"
- "isPreventedPrimeCalled"
- "interveneStarted"
- "interveneEnded"
- "interveneError"
- "coreManipulation"
- "mutationObserved"
- "resizeObserved"
- "intersectionObserved"
- "posterSet"
- "resizeObserverIsOff"
- "intersectionObserverIsOff"
- "mutationObserverIsOff"
- "navHidden"
- "navShown"
- "fault"
- "videoSet"
- "readyState"
