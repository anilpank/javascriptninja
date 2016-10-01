console.log('In video js');

//The reason we are not using jquery is because we need the raw element because video or the audio element is where all the API of media lies
var video = document.querySelector('#vid');

var remainingTime = $('#remainingTime');
var totalTime = $('#totalTime');
var playPause = $('#playPause');
var stop = $('#stop');
var rewind = $('#rewind');
var begin = $('#begin');
var end = $('#end');
var fastForward = $('#fastForward');
var volume = $('#volume');
var mute = $('#mute');
var scrubber = $('#scrubber');
var playBackRate = $('#playbackRate');

TIME_STEP = 5,