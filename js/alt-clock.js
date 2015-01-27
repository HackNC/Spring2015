$(document).ready(function(){
	var currentDate = new Date();
	var futureDate  = new Date(currentDate.getFullYear(), 8, 12);
	var diff = (futureDate.getTime() / 1000 - currentDate.getTime() / 1000) / 86400;
	diff = Math.round(diff);
	document.getElementById("alt-clock").innerHTML= diff + " Days";
});
