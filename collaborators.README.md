# hello and welcome to the project.
- first of all my knowledge of github functions are limited, i barely use github.
1. this project is still in the process of being made.
2. for more information about this project please visit *[KO81 testarea](https://ko81.eu.ngrok.io/app/testarea/?page=j&scenario=1&live=true)*
3. Please note! OPERA browser version 81 has issues to fetch video source.
4. the max version of this is a more readable version of this project.
have fun exploring.

# naming protocol
#### ``PRIME.version=6.72``
Where first position **6** describes if a major upgrade had happend, in the meaning of, more then 10 functions/methods changed, a method adding function has been completly rewritten, or a class object has been added or removed.

**for this to take place at least two have to agree with eachother.**

First position after the floatpoint **7** describes either a single function added/removed or a single function or method has been completly rewritten.

> By this i mean functions/methods which can be directly called by other events/functions/methods. not functions/methods within functions/methods.

Second to fourth position after the floatpoint **2** dscribes a minor change in less then 10 functions/methods changed. like operator/variable/block of code is changed/added/removed or minor flaw/issue fixed

For any change to a file please set your your alias at the top of the file after the ``"use strict"`` statement.

#  version names
#### standart == minimized
> This version will have all classes and functions.
>
> Will include PRIME, NAME & HELP, and functions which only are exposed to them.
> 
> > filename exsample : __filename__.js
#### max
> Same as 'standart', but designed to be more readable.
>
> Please note! This version will use more bandwidth, since it is quite bigger then the 'standart' version.
>
> > filename exsample : __filename__.max.js
#### standart trimmed
> This version will not have all classes and functions, only necessary functions will be keeped.
>
> Will not include PRIME, NAME & HELP, and functions which only are exposed to them.
>
> > filename exsample : __filename__.trim.js
#### max trimmed
> Same as 'standart trimmed', but designed to be more readable.
>
> > filename exsample : __filename__.trim.max.js

# fellow goal
1. ***important*** internal secrects like the ``order`` argument or the event element within the ``class videoToCanvas`` should never be exposed through an event.
2. ***important*** all document or window variables/functions must be called by any modern browser, no matter what **Operative System** the enduser uses, without causing a(n) flaw/issue. 
3. try to make the code so efficient and clean as possible.
> - function/methods names should be somehow desciptive.
> - variable names should be as short as possible
> > like a0 to a9 as exsample
> > 
> > d to d9 is commonly used as the dominator/iretator in any ``for`` or ``while`` loop
> - try to use as little whitespace as possible
4. functions/methods must be written in manner that they can be called individually, also they can run without any other function/method.
> either by the commonly used ``order`` argument or ``this``, this ensures a more convenient flow of the code.
5. none ``async`` are preferred unless it is necessary for the enduser to be able to run a ``.then`` function upon the outcome, or the function requires it.
