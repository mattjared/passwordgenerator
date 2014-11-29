function passGen(){
 	var blankUpChar = "";
 	var upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 	var blankLowChar = "";
 	var lowChar = "abcdefghijklmnopqrstuvwxyz";
 	var blankNumChar = "";
 	var numChar = "1234567890";
 	var blankSpecChar = "";
 	var specChar = "!@#$%^&*(){}[]";
 	for (var i = 0; i < 4; i++) {
 		blankUpChar += upChar.charAt(Math.floor(Math.random()*10));
 		blankLowChar += lowChar.charAt(Math.floor(Math.random()*10));
 		blankNumChar += numChar.charAt(Math.floor(Math.random()*10));
 		blankSpecChar += specChar.charAt(Math.floor(Math.random()*10));
 	}
 	document.getElementById("boogie").innerHTML = (blankUpChar + blankLowChar + blankNumChar + blankSpecChar);
};

new passGen;