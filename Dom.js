var enterBtnElem = document.querySelector("enterBtn");
var languageElem = document.querySelector("language");
var resetBtnElem = document.querySelector("resetBtn");

var counterElem = document.querySelector("counter");
 var buttonElem = document.querySelector("button");

var inputNameElem = document.getElementById("msg");
var couterElem = document.getElementById("counter");
var greetElem = document.getElementById("greet");
// var diplayDate = document.getElementById("display");

// var greet2 = greetFunc();
// // console.log(greet2);
// var val = textbox.value

var greetFuncInstance = greetFunc();

function nameButton(e) {
    var textbox = document.querySelector(".text-box ").value;


    var checkedNameBtnElem = document.querySelectorAll(".radioBtn");
    // var checkedNameBtn = checkedNameBtnElem.value;
    // var message = greet2.setLanguage(val, checkedNameBtn);
    // inputNameElem.innerHTML = message;

   for(var i = 0; i < checkedNameBtnElem.length; i++) {
        var element = checkedNameBtnElem[i];

        if(element.checked) {
            
           if(element.value == "IsiXhosa") {
            // alert(element.value == "IsiXhosa")
                document.querySelector('#msg').innerHTML = greetFuncInstance.xhosaGreet(textbox);
                greetFuncInstance.setCounter();
                couterElem.innerHTML = greetFuncInstance.getCounter()
           } else if(element.value == "English") {
                document.querySelector('#msg').innerHTML = greetFuncInstance.englishGreet(textbox);
                greetFuncInstance.setCounter();
                couterElem.innerHTML = greetFuncInstance.getCounter()
           } else if(element.value == "Afrikaans") {
                document.querySelector('#msg').innerHTML = greetFuncInstance.afrikaansGreet(textbox);
                greetFuncInstance.setCounter();
                couterElem.innerHTML = greetFuncInstance.getCounter()
            }
        }
        // var greetCounter = 0;
        // btn.addEventListener('click',function(){
        //         greetCounter ++;
        // }
        //   var greetedNames = {};
        //   btn.addEventListener('click',function(){
        //      sendMessage(greetedNames)
        //      localStorage['name']=  greetedNames;


   e.preventDefault();
    
    
    };
};
    

buttonElem.addEventListener('click', nameButton);






// var textElem = document.querySelector("Name");

// var setnameElem = document.querySelector("setName");
// var setnameElem = document.querySelector("setName");
// var setcounterElem = document.querySelector("setCounter");
// var setcounterElem = document.querySelector("setCounter");
// var addPersonElem = document.querySelector("addPerson");
// var displayNameElem = document.querySelector("displayName");


// var inputName = document.getElementById("name");

// var btn = document.getElementById("greet");
// var btn = document.getElementById("counter");

// var greet2 = greet()r;


// function nameButton() {
//     var checkedNameBtnElem = document.querySelector("input[name='name']:checked");
//     var checkedNameBtn = checkedNameBtnElem.value;
//     var nameButton = greet2.setLanguage(name, checkedNameBtn.value);
//      displayNameElem.innerHTML = nameButton;   
//  };


