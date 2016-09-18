'use strict';
function start() {
    console.log('body got loaded');
    console.log('script has started');
    
    //We are adding a heading to the Document here.
    //Remember document is always small case
    var heading = document.createElement('h1');
    var heading_text = document.createTextNode('Big Head');
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
    
    var info = new DocumentInfo();
    console.log(info);
    console.log(document.characterSet);
    console.log(document.compatMode);
}

console.log('Wondering when does this get printed');

function DocumentInfo() {
    this.charSet = document.characterSet;
    this.mode = document.compatMode;
    this.contentType = document.contentType;
    this.doctype = document.doctype;
    this.documentElement = document.documentElement;
    this.documentURI = document.documentURI;
    this.hidden = document.hidden;
    this.implementation = document.implementation;
    this.lastStyleSheetSet  = document.lastStyleSheetSet;
    this.styleSheets = document.styleSheets;
    this.timeline = document.timeline;
    this.undoManager = document.undoManager;
    this.activeElement = document.activeElement;
    this.body = document.body;
}