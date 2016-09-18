'use strict';
function init() {
    function onMouseUp() {
        var outputElem = document.getElementById('output-element');
        var outputText = document.getElementById('output-text');
        var selectedTextArea = document.activeElement;
        if (typeof selectedTextArea.value !== 'undefined') {
            var selection = selectedTextArea.value.substring(
            selectedTextArea.selectionStart, selectedTextArea.selectionEnd);
            outputElem.innerHTML = selectedTextArea.id;
            outputText.innerHTML = selection;
        }                
    }
    
    document.getElementById("ta-example-one").addEventListener("mouseup", onMouseUp, false);
    document.getElementById("ta-example-two").addEventListener("mouseup", onMouseUp, false);
    
    document.getElementById("ta-example-one").addEventListener("keyup", onMouseUp, false);
    document.getElementById("ta-example-two").addEventListener("keyup", onMouseUp, false);
 
}