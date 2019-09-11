// JavaScript Document	
		
		var table64 = new Array(  "0", "1", "2", "3", "4", "5", "6", "7",
												  "8", "9", "A", "B", "C", "D", "E", "F",
												  "G", "H", "I", "J", "K", "L", "M", "N",
												  "O", "P", "Q", "R", "S", "T", "U", "V",
												  "W", "X", "Y", "Z", "a", "b", "c", "d",
												  "e", "f", "g", "h", "i", "j", "k", "l",
												  "m", "n", "o", "p", "q", "r", "s", "t",
												  "u", "v", "w", "x", "y", "z", "?", "!");
	
		function cap2bin(captIn) {
			var captcha = captIn;
			var indAr = new Array();
			var bin = "";
			var tChar = "";
			var char = "";
			
			//decypher captcha character by character into numbers.
			 for(var i = 0; i < 8; i++){
				 var char = captcha.charAt(i);
				 //trace(char);
				 
				 //loop through table tunil place in index is found.
				 for(var j = 0; j <= 63; j++){
					 var tChar = table64[j];
					 
					 
					 if(char == tChar){
						 indAr.push(j);
					 }
					 else
					 {}
				 } 
				 
			 }
			  for(var k = 0; k < 8; k++){
				 bin += dec2bin(indAr[k]);
			 }
			 
			 return bin;
			
		}
		
		function dec2bin(decIn) {
		
		var bin = "";
		var decNum = decIn;
		//this while method constructs a string from the number you enter as decIn when you call the function
			while (decNum > 0) {
			
				if (decNum %2) {
				bin = "1"+bin;
				} 
				
				else {
				bin = "0"+bin;
				}
				
			decNum = Math.floor(decNum/2);
			
			}
		// left pad with zeros
			while (bin.length < 6) {
			
				bin = "0"+bin;
			
			}
		return bin;
		} 

	

