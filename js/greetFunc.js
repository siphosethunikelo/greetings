function greetFunc(nameList) {
    var greetedNames = nameList || {};

    function setName(val) {
        var UpperCase = val.toLowerCase()
        var name = UpperCase.toUpperCase().charAt(0) + UpperCase.slice(1)
        if (greetedNames[name] === undefined) {
            greetedNames[name] = 0;
        }
        else {
        greetedNames[name]++;
        }

    }


    function getCounter() {
        var count = Object.keys(greetedNames)
        return count.length;
    }

    function englishGreet(name) {
        return "Hello " + name
    }

    function afrikaansGreet(name) {
        return "Goeie moere " + name
    }

    function xhosaGreet(names) {
        return "Molo " + names
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
