$('#range').on("change", function() {
  var x = ($(this).val());	
  passGen(x);
});

function passGen(y){
 	var upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			lowChar = "abcdefghijklmnopqrstuvwxyz";
			numChar = "1234567890";
			specChar = "!@#$%^&*(){}[]";
			blankUpChar = blankLowChar = blankNumChar = blankSpecChar = ""; 
 	for (var i = 0; i < y; i++) {
 		blankUpChar += upChar.charAt(Math.floor(Math.random() * upChar.length));
 		blankLowChar += lowChar.charAt(Math.floor(Math.random() * lowChar.length));
 		blankNumChar += numChar.charAt(Math.floor(Math.random() * numChar.length));
 		blankSpecChar += specChar.charAt(Math.floor(Math.random() * specChar.length));
 	}
 	$("#boogie").text(blankUpChar + blankLowChar + blankNumChar + blankSpecChar);
};

passGen(y);

