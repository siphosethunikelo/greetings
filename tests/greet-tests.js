describe("greet factory function", function () {
    it("should return the corrrect name greeted", function () {
        let greetInstance = greetFunc();

        
        assert.equal('Hello john', greetInstance.englishGreet('john'));
        

     })
        it("this should passed the correct name greeted",function(){
             let greetInstance = greetFunc();
            assert.equal('Molo andile',greetInstance.xhosaGreet('andile'));
        })
        it("this will return name greeted",function(){
            let greetInstance = greetFunc();
            assert.equal('Goeie moere sbu',greetInstance.afrikaansGreet('sbu'));
        })
        it ("this will be able return names",function(){
            let greetInstance = greetFunc();
            assert.equal('Hello Nomsa',greetInstance.englishGreet('Nomsa'));
        })
        it ("this will be able return all names greeted",function(){
            let greetInstance = greetFunc();
            assert.equal('Molo sipho',greetInstance.xhosaGreet('sipho'));       
         })

    })
        // it ("this will be able to return all names",function(){
        //     let greetInstance = greetFunc();
        //     assert.equal('Molo Zola',greetInstance.xhosaGreet());
        // })
    // })
        
        
//         greetInstance.setName('sbu');
//         assert.equal('sbu', greetInstance.getName());
       
// })
//     it("should return the many correct name greeted", function () {
//     let greetInstance = greet();
    
//     greetInstance.setName('moore');
//     assert.equal('moore', greetInstance.getName());

// })
//     it("this will return name greeted", function () {
//     let greetInstance = greet();

//     greetInstance.setName('sipho')xhosaGreet
//     assert.equal('sipho', greetInsxhosaGreet


// })
//     it("this will be able return nxhosaGreet
//     let greetInstance = greet();

//     greetInstance.setName('Bobo');xhosaGreet
//     assert.equal('Bobo', greetInstance.getName());

// })

//     it("this will be able to return all names greeted", function () {
//     let greetInstance = greet();

//     greetInstance.setName('nomsa');
//     assert.equal('nomsa', greetInstance.getName());
// })
//     it("this will be able to greeted into Isixhosa", function () {
//     let greetInstance = greet();

//     greetInstance.setName('Busi');
//     assert.equal('Busi', greetInstance.getName());

// })
//     it("this will be able to greeted into Afrikaans", function () {
//     let greetInstance = greet();

//     greetInstance.setName('Anna');
//     assert.equal('Anna', greetInstance.getName());
// })
//     it("this will be able to greeted into English", function () {
//     let greetInstance = greet();

//     greetInstance.setName('Steve');
//     assert.equal('Steve', greetInstance.getName());
// })
// })

