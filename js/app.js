// Set
function saveSettings(){
	var name = document.getElementById('nameInput').value;
	var clinic = document.getElementById('clinicInput').value;
	//console.log(name);

	var loopTime = document.getElementById('loopTime').value;

	localStorage.setItem("personalizationName", name);
	localStorage.setItem("personalizationClinic", clinic);

	localStorage.setItem("loopTime", loopTime);
	window.location.href = 'index.html';
}
function renderHeader(){
	var name = localStorage.getItem("personalizationName");
	var clinic = localStorage.getItem("personalizationClinic");
	res = '<img src="images/logo.png" class="logo">'//'<span id=mainTitle>Exam Room <span class="titleRed">Health<b>BOARD</b></span></span>'
			+ '<a href="index.html" onclick="stopLoop();"><img src="images/home.png" class="homeIcon"></a>'
			+ '<div class="heatherBox">'
				+ name + ', ' + clinic
			+'</div>';
	document.getElementById('header').innerHTML =  res;
}
function populatePersonalizationInput(){
	if(document.getElementById('nameInput')){
		var name = localStorage.getItem("personalizationName");
		var clinic = localStorage.getItem("personalizationClinic");
		document.getElementById('nameInput').value = name;
		document.getElementById('clinicInput').value = clinic;
	}
}

if(localStorage.getItem("loopTime")){
	console.log('timer set '+localStorage.getItem("loopTime"));
}else{
	console.log('t not set');
	localStorage.setItem("loopTime", 30000);
}

var loopTime = localStorage.getItem("loopTime");

// LOOP vojno
function resetTimer(){
	console.log('resetTimer');
	clearTimeout(timeout);
	timeout = setTimeout(function(){startLoop()}, loopTime);
} 
function stopLoop(){
	console.log('stop Loop');

	var loopState = 0;
	if(localStorage.getItem("loopOn") == 1){
		loopState = 1;
	}
	localStorage.setItem("loopIndex", 0);
	localStorage.setItem("loopOn", 0);
	if(loopState == 1){
		window.location.href = 'index.html';
	}else{
		console.log('loop already off');
	}
}
var loopArr = ['ad-3d.html','ad-articles.html','ad-1.html','ad-2.html','ad-3.html','ad-4.html'];
//var loopArr = ['index.html','searchResults.html','index.html','searchResults.html','index.html','searchResults.html','index.html','searchResults.html'];
function startLoop(){
	localStorage.setItem("loopIndex", 0);
	localStorage.setItem("loopOn", 1);
	//console.log('loop start');
	var loopInterval = setTimeout(function(){nextLoop(0)}, 5000);
	//window.location.href = 'searchResults.html';
}
function nextLoop(i){
	//console.log('index' + i);
	var newIndex = parseInt(i)+1;
	//console.log(newIndex);
	localStorage.setItem("loopIndex", newIndex);
	window.location.href = loopArr[parseInt(i) % loopArr.length];
}
var loopOn = localStorage.getItem("loopOn");
if(loopOn == 1){
	//console.log('loop on works');
	var nextLoopIndex = localStorage.getItem("loopIndex");
	var loopInterval = setTimeout(function(){nextLoop(nextLoopIndex)}, 5000);
}else{
	var timeout = setTimeout(function(){startLoop()}, loopTime);
}

document.getElementById('container').onclick = function(){
	console.log('test');
	stopLoop();
}


window.onload = function(e){ 
    renderHeader();
    populatePersonalizationInput();
    resetTimer();
    //document.getElementById('')
}