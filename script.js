
function func(s){
	for(var i in s){
		console.log(i);
	}
}

function Multiplier () { 
	this.currentValue = null;
	this.multiply=function(num){
		if (this.currentValue == null){
			this.currentValue = num*1;
			return num*1;
		}
		else{
			this.currentValue *= num;
			return this.currentValue;
		}
	} 
	this.getCurrentValue=function(){
		return this.currentValue;

	}
}

var M1 = new Multiplier();
alert(M1.multiply(2));
alert(M1.multiply(5));
func(M1);



