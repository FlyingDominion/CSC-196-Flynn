function bigger(){
    alert("Hello, world!");
    document.getElementById("text").style.fontSize = "24pt";
}

function moo(){
	var str = document.getElementById("text").value.toUpperCase();
	var parts = str.split(".");
	str = parts.join("-Moo.");
	document.getElementById("text").value = str;
	
}

function fancify(){
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline"
}

function bore(){
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "black";
    document.getElementById("text").style.textDecoration = "none";
}

function radioChange(){
    alert("How about this style?");
}