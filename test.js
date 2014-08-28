//document.write("test");
setTimeout(getHelp, 5000); 
function getHelp() {  
alert("try clicking on help")
};

function validate() { 
 var message, value; 
 message = document.getElementById("message"); 
 message.innerHTML = ""; 
 value = document.getElementById("validate").value; 
 try { 
 if(value === "") throw "is Empty"; 
 if(isNaN(value)) throw "not a number"; 
 if(value > 10) throw "too high"; 
 if(value < 5) throw "too low"; 
 } 
 catch(err) { 
 message.innerHTML = "Input " + err; 
 } 
 finally { 
 document.getElementById("validate").value = ""; 
 } 
} 

