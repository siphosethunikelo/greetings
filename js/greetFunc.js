function greetFunc(nameList) {
    var greetedNames = nameList || {};

    function setName(val) {

        if (val === "") {
            return "err"
        }

        var UpperCase = val.toLowerCase()
        var name = UpperCase.toUpperCase().charAt(0) + UpperCase.slice(1)
        if (greetedNames[name] === undefined) {
            greetedNames[name] = 0;
        }

        else {
            greetedNames[name]++
        }
    }


    function getCounter() {
        var count = Object.keys(greetedNames)
        return count.length;
    }

    function englishGreet(name) {
        if (name) {
            return "Hello " + name
        }

        else {
            return "please selector your name"
        }
    }

    function afrikaansGreet(name) {
        if (name) {
            return "Goeie moere " + name
        }
        else {
            return "please selector your name"
        }
    }

    function xhosaGreet(name) {
        if (name) {
            return "Molo " + name
        }
        else {
            return "please selector your name"

        }
    }

    function getName() {
        return greetedNames;
    }

    return {
        setName,
        getName,
        getCounter,
        englishGreet,
        afrikaansGreet,
        xhosaGreet,
    }
}
