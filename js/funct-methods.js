var text="The sum is:";
//creating function assigning arguments
function addIt(numA,numB){
	var total=numA+numB;
	console.log(text+total);
}
// addIt(8,8);//callin function passing parameters
// addIt(10,10);

var x={
	arms:2,
	nose:true,
	hair:'black',
	slogan: function(what){//method its a function in a object
		console.log(what + 'is awesome');
	}
}
x.slogan('JS');
x.hair='white';
console.log(x.hair);


function multiply(a,b){
	var mul=a*b;
	return mul;
	console.log('not displaying');//doesn't executes once return is entered before it
}
console.log(multiply(3,3));