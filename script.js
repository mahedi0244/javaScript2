
function func(s){
	for(var i in s){
		console.log(i);
	}
}

function Multiplier () { 
	var currentValue = null;
	this.multiply=function(num){
		if (currentValue == null){
			currentValue = num*1;
			return num*1;
		}
		else{
			currentValue *= num;
			return currentValue;
		}
	} 
	this.getCurrentValue=function(){
		return currentValue;

	}
}

var M1 = new Multiplier();
alert(M1.multiply(2));
alert(M1.multiply(5));
func(M1);



