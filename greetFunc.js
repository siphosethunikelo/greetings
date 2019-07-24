function greetFunc() {
    var greetCounter = 0;
    var greetedNames = {};
    var name = "";



    // function setLanguage(name, language) {
    //     console.log(name);
        
    //     greetedNames['name'] = name;

    //     if (language === "Isixhosa") {
    //         return "molo" + name;

    //     }
    //     else if (language === "English") {
    //         return "Hello" + name;

    //     }

    //     else if (language === "Afrikaans") {
    //         return "Goeie moere" + name;
    //     }
    // }

    // function checkNames(val) {

    // }

    function setName(val) {
        return name = val;
    }

    function getName() {
        return name;
    }

    function setCounter() {
        greetCounter++;
    }

    function getCounter() {
        return greetCounter;
    }

    function englishGreet(name) {
        return "Hello " + name
    }

    function afrikaansGreet(name) {
        return "Goeie moere " + name
    }

    function xhosaGreet(name) {
        return "Molo " + name
    }

    return {
        setName,
        getName,
        setCounter,
        getCounter,
        englishGreet,
        afrikaansGreet,
        xhosaGreet,
        // setLanguage,
    }
}

var greetFuncInstance = greetFunc();

// greetFuncInstance.setName("thando");
// alert(greetFuncInstance.getName());

// greetFuncInstance.setCounter();
// greetFuncInstance.setCounter();
// alert(greetFuncInstance.getCounter());


// alert(greetFuncInstance.englishGreet("thanduxolo"));