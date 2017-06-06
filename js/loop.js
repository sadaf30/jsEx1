var states=['ny','nj','sjo','mco','la'];
var ul=document.createElement('ul');
// console.log(ul);
for(var i=0; i<states.length;i++){

	var li=document.createElement('li');
	li.innerHTML='<b>' + states[i] + '</b>';
	ul.appendChild(li);
}

document.body.appendChild(ul);
	
	
	
