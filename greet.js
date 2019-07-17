function greet() {
    var name = "";
    var greetCounter = 0;
    var greetedNames = {};

    function setName(val){
        name = val;
    }

    function setCounter(){
        greetCounter++; 
    }

    function getName(val){
        return name;
    }

    function getgreetCounter(val){
        return name;
    }


    function addPerson(name) {
        greetedNames = name;
    }

    function getNames() {
        return greetedNames;
    }

    function setLanguage(){
            return Isixhosa;
    }
    return {
        setName,
        getName,
        setCounter,
        getgreetCounter,
        addPerson
    }
}

