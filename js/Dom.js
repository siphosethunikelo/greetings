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
    var UpperCase = document.querySelector(".text-box ").value;
    var checkedNameBtnElem = document.querySelector("input[name='myradio']:checked");
    if (checkedNameBtnElem) {
        var name = UpperCase.toUpperCase().charAt(0) + UpperCase.slice(1)

    if (checkedNameBtnElem.value === "xhosa") {
        document.querySelector('#msg').innerHTML = greetFuncInstance.xhosaGreet(name);
    } else if (checkedNameBtnElem.value === "english") {
        document.querySelector('#msg').innerHTML = greetFuncInstance.englishGreet(name);
    } else if (checkedNameBtnElem.value === "afrikaans") {
        document.querySelector('#msg').innerHTML = greetFuncInstance.afrikaansGreet(name);
    }

    greetFuncInstance.setName(name);
    localStorage.setItem('user', JSON.stringify(greetFuncInstance.getName()));
    couterElem.innerHTML = greetFuncInstance.getCounter()
    e.preventDefault();

    } else {
        document.querySelector('#msg').innerHTML = "please select language"
    }

};

function resetButton() {
    localStorage.removeItem('user');
    document.location.reload();
}

buttonElem.addEventListener('click', nameButton);

resetBtnElem.addEventListener('click', resetButton);






















