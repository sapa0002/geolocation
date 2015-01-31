// JavaScript Document

var container;
var errorMessage;
var canvas;
var parameters;
document.addEventListener("DOMContentLoaded", function () {
	
	var button = document.createElement("btn");
	button.addEventListener("click", location);
	document.body.appendChild(button);
	
});
	
function location() {
	
	container = document.createElement("div");
	container.setAttribute("class", "container");
	document.body.appendChild(container);
	
	
	//no geolocation API in the browser
	if(!navigator.geolocation){
		//error message
		errorMessage = document.createElement("div");
		errorMessage.setAttribute("id", "errorContainer");
		document.body.appendChild(errorMessage);
		errorMessage.innerHTML="Your browser doesn't support geolocation API.";	
			
	}
	
	
function yesLocation(attr){
	
	var lngt = attr.coords.longitude;
	var ltd = attr.coords.latitude;
	document.querySelector("#yourLocation").innerHTML = "";
	//use canvas to create an img
	canvas = document.createElement("canvas");
	canvas.setAttribute("class", "canvas");
	document.querySelector(".container").appendChild(canvas);
	canvas.width = "400";
	canvas.height = "400";
	var context = canvas.getContext("2d");
	var img = new Image ();
	
	img.onload = function () {
		context.drawImage(img, 0, 0);
	}; 
	img.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + ltd + "," + lngt +  "&zoom=14&size=400x400&sensor=false&markers=color:orange%7Clabel:N%7C" + ltd + "," + lngt + "";
	
}

function noLocation() {
	
		document.querySelector("#yourLocation").innerHTML = "";
		errorMessage = document.createElement("div");
		errorMessage.setAttribute("id", "errorContainer");
		document.body.appendChild(errorMessage);
		errorMessage.innerHTML="Your location is uknown";	

}

	container.innerHTML = "<p id = 'yourLocation' style='text-align: center'>Your location is </p>";
		parameters = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0	
		}
		
	navigator.geolocation.getCurrentPosition(yesLocation, noLocation, parameters);	
}	
