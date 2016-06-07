
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

function photo (name, location){
	this.name = name;
	this.location = location;
}

function album (){
	this.photos = [];
}

var M1 = new Multiplier();
var p1 = new photo("mahedi", "queens");
var p2 = new photo("John", "Manhattan");
var a1 = new album();
a1.photos[0] = p1;
a1.photos[1] = p2;
//alert(M1.multiply(2));
//alert(M1.multiply(5));
func(M1);
func(p1);


for (i=0; i<a1.photos.length; i++)
	alert(a1.photos[i].location);






