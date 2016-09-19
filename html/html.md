# Let's learn about HTML.

### What is HTML
- It is a markup language meant to be processed by a client application (Browser).
- It consists of doctype (standard compliance), html (root Element), head (document metadata) and body (document data).
- Check with http://validator.w3.org/ in order to check for your html validity.

#### Additional Document Elements
- sup sub Superscript and subscript.
- cite Cite work by another.
- abbr acronym Abbreviation or acronym.
- em strong  Indicates emphasis.
- code samp Indicates code block or sample output.
- kbd, var Keyboard input and code variables
- blockquote q Block level or inline quotes

#### Links and anchor
- You can anchor different part of pages by using their ids in href prepended by #. Have a look at anchor.html.

#### Text breaking and whitespace
- whitespace generally ignored in block and inline.
- pre Whitespace is respected.
- br Explicit line break.
- hr Horizontal rule.
- Character entities &nbsp; (space which can't be used for linebreaks)   and &lt;&gt; (entities for HTML markup characters)

#### HTML 5 elements
- article
- aside
- video
- bdi (right to left)
- canvas (drawing surface on browser) (2D/WebGL(3G context)) (Drawing is done pixel by pixel)
- datalist (Textbox where user can input any values plus you can provide options as well)
- details/summary
- embed to be used instead of object element in order to embed rich media like flash/silverlight/videos.
- figure/figcaption (associate caption elements with figures)
- header
- footer
- main (experimental) - page's main content
- math (Use Math and markup language in order to natively represent equations).
- mark (mark highlight or bolden text within text)
- meter (bar graph ) -depict a value within a known range of value
- nav (main Navigation links of host website)
- output (place output of results of a calculation)
- progress (shows progress bar)
- section (used to create logical container around group of elements, association without styling needs)
- time (point in time till seconds and timezone)
- wbr (really big word)


#### HTML5 Javascript APIs
- Canvas API (2D 3D context)
- Contacts (yet to be implemented)
- File API (browser access to sandbox areas of user's computer) 
- Forms (built in validation, add custom validation)
- Geolocation (location of the user)
- IndexedDB (Local storage of data, MB large) (Object Database) (It has replaced WebSQL database)
- Checkout http://caniuse.com/ to find out which browsers support above APIs
- Media Capture (Access camera, webcam and so on)
- Microdata (Expose info to machines as easiliy as it is presented to users)
- Messaging 
- Offline web applications
- Selection API (JQuery like selection, much faster than jquery)
- Server sent events - One directional messages from server to browser. (You can stream data to client)
- Websockets are bidirectional communication. (sockets two and from the server) (chatting app without socket would use polling server)
- Web Notifications (love/hate) - display notifications to user from browser (display messages within OS). (Experimental)
- Web Storage (more info than cookie, less than indexedDB, unlike a cookie, data is never sent to server, all is at the client)
- Web Workers (Threading in web browsers)
- XmlHttpRequest Level 2 (Ajax got an update), (Ajax limitation is single origin domain constraint, you can't send request to server which is not the originating server), Level 2 allows for cross domain posting but adds security layer.

#### When is HTML done
- 2022 (All browsers would support all APIs)
- You don't need to wait till 2022. 
- Use features which are done and use workarounds/polyfills for others.

#### Detecting HTML5
- Use https://modernizr.com/ library in order to detect for html5 features.

#### DOM selection
- New selectors available.
- getElementsByClassName (This is live set, if someone adds element of this class, this set automatically gets updated)
- querySelector (expects CSS 3 arguments) (it will give first result)
- querySelectorAll (expects CSS 3 selections arguments) (gives all results)
- You can used querySelector/querySelectorAll on document as well as individual html elements as well. (These are not live sets)

#### Forms in HTML5
- new input element types (color, month, url, datalist, number, week, date, range, datetime, search, datetime-local, tel, email, time)
- Attributes novalidate, autofocus, required, min, max, step, pattern, maxlength
- div class="invalid" just below form input type.

#### Forms validation pseudo classes
- Ensure that css rules show in correct order, then you can get a lot of validations without writing a lot of javascript code.
- Use data-rule attribute of span class inside a div class (validation-messages) to define multiple custom validations.

#### Native validation rules
- valueMissing rule is applied when you add required attribute.
- typeMisMatch rule is applied when value of the element is not matched to declared type. (Say user enters invalid values for type url, email).
- patternMisMatch rule is applied when value of element does not match against regular expression in pattern attribute.
- tooLong rule is applied when value of element is longer than maxLength rule.
- rangeUnderflow rule is true when range element's value is smaller than the min value.
- rangeOverflow is similar.
- stepMismatch - Range element's value is impossible given the step value.
- valid returns true when all other validations are false.
- e.srcElement gives the source element which triggered the event.

- Testing ssh key
-  git+ssh://github.com/anilpank/javascriptninja
