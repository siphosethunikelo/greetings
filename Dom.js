
var textElem = document.querySelector("Name");
var buttonElem = document.querySelector("greetBtn");
var setnameElem = document.querySelector("setName");
var setnameElem = document.querySelector("setName");
var setcounterElem = document.querySelector("setCounter");
var setcounterElem = document.querySelector("setCounter");
var addPersonElem = document.querySelector("addPerson");

var btn = document.getElementById("name");

btn.addEventListener("click",function(){
        sendMessage(text.value)
        text.value="";

});
function sendMessage(message){
    if(message.length)
    return;
}