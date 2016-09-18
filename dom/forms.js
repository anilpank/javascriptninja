function seeForm() {
    var selectForm = document.forms[2];
    console.log(selectForm);
    var selectFormElement = document.forms[2].elements[0];
    console.log(selectFormElement);    
    console.log(document.plugins);    
    var rightClickCount = 0;
    //Disable right click.
    document.oncontextmenu = function () { // Use document as opposed to window for IE8 compatibility
        console.log('right click detected');    
        console.log(rightClickCount++);
        return false;
    };

}