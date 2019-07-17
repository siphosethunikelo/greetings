describe("greet factory function", function () {
    it("should return the corrrect name greeted", function () {
        let greetInstance = greet();

        greetInstance.setName('john');
        assert.equal('john', greetInstance.getName());
        

    })
    it("this should passed the correct name greeted", function () {
        let greetInstance = greet();
        
        greetInstance.setName('sbu');
        assert.equal('sbu', greetInstance.getName());
       
})
    it("should return the many correct name greeted", function () {
    let greetInstance = greet();
    
    greetInstance.setName('moore');
    assert.equal('moore', greetInstance.getName());

})
    it("this will return name greeted", function () {
    let greetInstance = greet();

    greetInstance.setName('sipho');
    assert.equal('sipho', greetInstance.getName());


})
    it("this will be able return name greeted", function () {
    let greetInstance = greet();

    greetInstance.setName('Bobo');
    assert.equal('Bobo', greetInstance.getName());

})

    it("this will be able to return all names greeted", function () {
    let greetInstance = greet();

    greetInstance.setName('nomsa');
    assert.equal('nomsa', greetInstance.getName());
})
    it("this will be able to greeted into Isixhosa", function () {
    let greetInstance = greet();

    greetInstance.setName('Busi');
    assert.equal('Busi', greetInstance.getName());

})
    it("this will be able to greeted into Afrikaans", function () {
    let greetInstance = greet();

    greetInstance.setName('Anna');
    assert.equal('Anna', greetInstance.getName());
})
    it("this will be able to greeted into English", function () {
    let greetInstance = greet();

    greetInstance.setName('Steve');
    assert.equal('Steve', greetInstance.getName());
})
})

