var enterBtnElem = document.querySelector("enterBtn");
var languageElem = document.querySelector("language");
var resetBtnElem = document.querySelector(".resetBtn");
var counterElem = document.querySelector("counter");
var buttonElem = document.querySelector("button");

var inputNameElem = document.getElementById("msg");
var couterElem = document.getElementById("counter");
var greetElem = document.getElementById("greet");

var storeuser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {}

var greetFuncInstance = greetFunc(storeuser);
couterElem.innerHTML = greetFuncInstance.getCounter();



function nameButton(e) {
    var textbox = document.querySelector(".text-box ").value;
    console.log(`${textbox}`);
    var checkedNameBtnElem = document.querySelector("input[name='myradio']:checked");
    console.log(checkedNameBtnElem.value);

    if (checkedNameBtnElem) {
        if (checkedNameBtnElem.value == "IsiXhosa") {
            document.querySelector('#msg').innerHTML = greetFuncInstance.xhosaGreet(textbox);
        } else if (checkedNameBtnElem.value == "English") {
            document.querySelector('#msg').innerHTML = greetFuncInstance.englishGreet(textbox);
        } else if (checkedNameBtnElem.value == "Afrikaans") {
            document.querySelector('#msg').innerHTML = greetFuncInstance.afrikaansGreet(textbox);
        }
    }
    greetFuncInstance.setName(textbox);
    localStorage.setItem('user', JSON.stringify(greetFuncInstance.getName()));
    couterElem.innerHTML = greetFuncInstance.getCounter()
    e.preventDefault();
};

function resetButton(){
    localStorage.removeItem('user');
    document.location.reload();
}

buttonElem.addEventListener('click', nameButton);

resetBtnElem.addEventListener('click', resetButton);






















