var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");




//When the user clicks on the password field, shows the mesaage box
myInput.onfocus = function() {
  
  document.getElementById("message").style.display = "block";
}

//When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  
  document.getElementById("message").style.display = "none";
}


//When the user starts to type something inside the password field
myInput.onkeyup = function(){
  //Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
if(myInput.value.match(lowerCaseLetters)){
  letter.classList.remove("invalid");
  letter.classList.add("valid");
}else{
  letter.classList.remove("valid");
  letter.classList.add("invalid");
}
//Validate capital Letters
var upperCaseLetters = /[A-Z]/g;

if(myInput.value.match(upperCaseLetters)){
  
  capital.classList.remove("invalid");
  capital.classList.add("valid");
}else{
  capital.classList.remove("valid");
  capital.classList.add("invalid");
}

//Validate numbers

var numbers = /[0-9]/g;
if(myInput.value.match(numbers)){
  number.classList.remove("invalid");
  number.classList.add("valid");
}else{
  number.classList.remove("valid");
  number.classList.add("invalid");
}

//Validate length
if(myInput.value.length >= 8){
  length.classList.remove("invalid");
  length.classList.add("valid");
}else{
  length.classList.remove("valid");
  length.classList.add("invalid");
}
}
//Validate the Email
function emailFunction()
{
  var email;
  var email = document.getElementById("txtemail").value;
  var reg=/^([A-Za-z0-9_\-\.])+\@([A-za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if(reg.test(txtemail.value) == false)

{  
    document.getElementById("results").innerHTML="Its not a valid email:"+email;
 
document.getElementById("results").style.color="red";
    document.getElementById("txtemail").style.border="2px solid red";
    document.getElementById("results").style.display = "block";
    return false;
  }
  
  else
    {
      document.getElementById("results").innerHTML="its a valid email:"+email;
      document.getElementById("results").style.color="green";
    document.getElementById("txtemail").style.border="2px solid green";
      document.getElementById("results").style.display = "none";
    }
  return true;
}
