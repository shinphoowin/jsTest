var myButton=document.querySelector('button');
myButton.onclick=function(){
	var n1=document.getElementById("firstNumber").value;
	var n2=document.getElementById("secondNumber").value;
	// console.log(n1+"&"+n2);
	var multiply=n1*n2;
	document.getElementById("answer").innerHTML="Multiplication value is:::"+multiply;
}

