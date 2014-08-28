var message;
message = document.getElementById("message");
message.innerHTML = "Click me";

var a = 1;

function change(){
	try{
		if (a%2 == 1) throw "Button was clicked";
		if (a%2 == 0) throw "Click me";
	}
	catch (err) {
		message.innerHTML = err;
	}
	finally {
		a++;
	}
};