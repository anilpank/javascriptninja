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

#### Html5 Video and Audio
- Encoding media
- Try Miro video convertor to convert video into different formats.
- No Javascript required in order to play media in browser.

- Check out vidoe.html (video tag, controls, autoplay, loop attributes) <pre> <video controls width="320">
            <source src="2015-06-09 20.47 MTCM Demo.mp4"/>
        </video></pre>

### HTML5 Webcomponent fundamentals
- Undescriptive markup (so much nesting) is a big problem.
- Style conflicts (bigger problem)
- Avoiding style conflicts requires highly specific CSS selectors.
- Use of !important to force styles
- No guarantee another style won't conflict.
- No native templates. We can import javascript with script tag, css with style tag and images with img tag, but we can't import html.
- We store html in hidden dom elements and manually extract when necessary. (leads to styling struggles)
- We use iframe sometime to get separate scope and styling. (interaction between iframe and hosting page is awkward)
- No bundling (can't bundle css, javascript and html together)
- No standard (jquery, bootstrap, extjs, Angular, KendoUI, wijmo, jquery)
- Undescriptive markup, no standards, style conflicts, no native templates, no bundling. All these problems have one solution Web components
- Templates (Inert reusable markup), Custom Elements (Define our own elements), Shadow Dom (encapsulated markup and styling), Imports (Bundle html, js and css together)
- Chrome is the first browser to support Web components (Templates, Html Imports, Custom Elements and Shadow Dom). Other browsers can be supported thrpugh polyfills

### Why learn native web components first?
- Learning jquery before javascript was a problem.
- Always learn foundation before learning abstraction.
-  If making a billing app, the base component can be called billapp and then component within components


### Future of web components
- Communities will rally around components.
- Github will measure interest.
- Popular components will drive future HTML elements.

### Why webcomponents
- Web components will make markup easier to read/understand, don't have to start from zero everytime, build simple clear modular and extendible code
- Reduced bugs in components.
- Fewer integration mistakes.
- Reduced learning curves.
- Web components is biggest thing since AJAX 2005.

### Templates
- Use template tag
- It is inert. It does nothing until cloned.
- Anything inside template is hidden from selectors.
- You can place template tag anywhere head, body, frameset,etc.

### Template Activation
<pre>
var template = document.querySelector('#myTemplate');
var clone = document.importNode(template.content, true); //true signifies deep copying
document.body.appendChild(clone);
</pre>

### Inject Data into templates
- Inject data before cloning by manipulating the template clone
<pre>
//1 Get a reference to the template
var template = document.querySelector('template');
var clone = document.importNode(template.content, true); 
//Change the target element within the template as desired
clone.querySelector('.verb').textContent = 'awesome';
//Append element to page
document.body.appendChild(clone);
</pre>


### Nested templates
- Must manually clone both parent and child templates.

### Custom Elements
- Define your own custom html elements which look feel and behave like native html elements
- Our current html markup isn't descriptive
- Descriptive markup conveys additional information, improves SEO, enhances accesiblity, speeds development, aids maintainence
- div/span element should be used only when no other semantic element is available

### Our own custom elements
- Define your own custom elements, name must have a dash. (my-component)
- Custom elements can extend existing html elements using is attribute <input type="text" is="search">

### Registering Custom Elements
- Create a prototype (You are creating a shadow root and utilize desired template to populate shadow root). All custom elements are derived from 
HTMLElement.prototype prototype. But when you are extending a native HTML element, then you need to put type of native html element.
<pre>
var SlickTabs = Object.create(HTMLElement.prototype);
</pre>
- Register the new element via registerElement
<pre>
 document.registerElement('slick-tabs');
</pre>
- Use it! (Add to DOM or place tag on page).
document.body.appendChild(new SlickTabs()); or <slick-tabs></slick-tabs>
- You can extend custom elements too.
<pre>
var XFooProto = Object.create(HTMLElement.prototype);
var XFooExtended = document.registerElement('x-foo-extended', {
    prototype: XFooProto,
	extends: 'x-foo'
});
</pre>

### Four ways to instantiate components
- Markup <pluralsight-comment/>
- New operator var comment= new PluralSightComment(); . You need to append to dom using javascript
- Create element var comment = document.createElement('pluralsight-comment'). You need to append to dom using javascript.
- innerHTML el.innerHTML = '<pluralsight-comment/>';

### 3 ways to instantiate extended element
- Declare in markup. <button is='super-button'></button>
- Via javascript. var button = document.createElement('button', 'super-button');
- Using new operator. document.body.appendChild(new SuperButton);

### Lifecycle callback methods
- createdCallback -> Instance is created
- attachedCallback -> Instance inserted to DOM
- detachedCallback -> Instance removed from DOM
- attributeChangedCallback -> Attributes are added, removed or updated

### Shadow Dom Fundamentals
- Shadow dom resolves scoping problem.
- Shadow dom vs light dom
- Shadow root, shadow boundary, shadow host, dom subtrees
- How to avoid accidently styling other parts of the page?
- How to avoid other developers accidently styling my component?
- How to hide away my markup from accidental manipulation?

### Two types of DOMS
- Light Dom (The Dom that you know today)
- Shadow Dom (The Dom that hides away complexity)
- Logical Dom (Umbrella above light dom and shadow dom)
- Shadow Dom is already used today. Example below use shadow dom in order to hide their complex markup
<pre>
 <input type="range">
 <video controls width="250"></video>
 <input type="date">
</pre>
- If you want to see shadow dom behind these native elements, in Google chrome developer tools Settings, use Elements and check on show User agent shadow DOM.

### Shadow DOM Hacks
- Shadow Dom encapsulates DOM subtrees and styles.
- Today iframe is commonly used to get separate scope and styling. Examples include Google Map and YouTube Videos
- iFrames are designed to embed another full document,accesing values in iFrame document from parent document is hassle.
- iFrames are undescriptive.
- Frames provide excessive encapsulation.
- No clean API to allow iFrame and iFrame's host page to interact.
- Another hack for shadow dom is canvas tag
- But canvas tag has accesiblity issues, SEO issues and can't easily compose.
- Can't extend existing elements.

### Create Shadow Dom (3 step process)
- Select Shadow Host (Element in light dom that will wrap shadow root) (Video tag is an example of shadow host)
- Create a shadow root.
- Add elements to shadow dom the same way you do today. (innerHTML, appendChild)
<pre>
            var goodhost = document.getElementById('goodhost');			
			var goodRoot = goodhost.createShadowRoot();
			var template = document.querySelector('template');
			goodRoot.appendChild(document.importNode(template.content, true));
</pre>
- Have a look at createShadowRoot.html for complete example.
- Shadom DOM encapsulates it's own css rules and does not get affected by outside css rules.

### Shadow Host & Boundary
- Element in light dom which is hosting shadow dom.
- Check for the element which hosts #shadow-root.
- CSS selectors that apply for shadow dom, don't apply outside the shadow dom. Styles in shadow dom don't cross over the boundary. (There are some exceptions)
- Shadow boundary separates light dom from shadow dom & encapsulates dom subtree.
- Shadow boundary benefits (Simpler selectors, simpler markup, enhanced readablity and avoid accidental styling)

### ShadowRoot DOM methods
- getElementById()
- getElementsByClassName()
- getElementsByTagName()
- getElementsByTagNameNS()
- querySelector()
- querySelectorAll()

### Is javascript encapsulated in shadow DOM
- No
- But elements inside the shadow dom can't be easily manipulated (without using highly specific APIs) by outside Javascript.


### Shadow Dom insertion points and events
- Content insertion points
- Shadow insertion points
- Events

### Content Insertion points
- Content select is greedy. First match will match all.
- Have a look at contentInsertion.html

### Insertion points vs distributed nodes
- content creates an insertion point.
- Elements inserted at this insertion point are called distributed nodes.
- Distributed nodes are merely displayed at the insertion point. They are not actually inserted into the shadow dom.
- The distributed nodes still remain part of light dom.
- <content></content> Any content that is distributed here can't be traversed (with traditional APIs at least).
- Have a look at traverseDistributedNodes.html for detailed example.

### Supported <content></content> selectors
- Type selector <content select='p'></content>
- Class selector <content select='.target'></content>
- Attribute selector <content select='input type=[text]'></content>
- ID selector <content select='#target'></content>
- Negation pseudo class <content select=':not(.ugly)'></content>
- Universal selector <content></content>

### Shadow insertion points
- shadow tag is similar to content tag with one difference.
- shadow tag is used for hosting other shadow trees.
- Shadow tag allows you to create shadow dom insertion points within a shadow dom. (Shadow dom inception)
- When we have multiple shadow trees, youngest tree is last one added. Previous trees are called older trees.
- The first shadow tag added to shadow host wins, if you add multiple shadow tags to a shadow host, only the first one will render.
- Have a look at shadowInsertionPoints.html for further details.

### Get Distributed Nodes
- 