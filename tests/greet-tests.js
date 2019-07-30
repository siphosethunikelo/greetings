describe("greet factory function", function () {
    it("should return the corrrect name greeted", function () {
        let greetInstance = greetFunc();
      
        assert.equal('Hello Andile', greetInstance.englishGreet('Andile'));
     })
         it("this should passed the correct name greeted",function(){
              let greetInstance = greetFunc();
             
            assert.equal('Molo Sipho', greetInstance.xhosaGreet('Sipho')); 
    })
        it("this will return name greeted",function(){
             let greetInstance = greetFunc();
             assert.equal('Goeie moere Sbu',greetInstance.afrikaansGreet('Sbu'));
        })
        it ("this will be able return all names greeted",function(){
                 let greetInstance = greetFunc();
                 greetInstance.setName('Jan');
                 greetInstance.setName('Jane');
                 greetInstance.setName('James');
                 greetInstance.setName('John');
                 assert.equal(4, greetInstance.getCounter());
    
             })
    })
        // it("this should passed the correct name greeted",function(){
        //      let greetInstance = greetFunc();
             
        //     assert.equal("Molo", greetInstance.xhosaGreet());
        // })
        // it("this will return name greeted",function(){
        //     let greetInstance = greetFunc();
        //     assert.equal('Goeie moere sbu',greetInstance.afrikaansGreet('sbu'));
        // })
     
        // })
        // it ("this will be able return all names greeted",function(){
        //     let greetInstance = greetFunc();
        //     greetInstance.setName('Jan');
        //     greetInstance.setName('Jane');
        //     greetInstance.setName('James');
        //     greetInstance.setName('John');
        //     assert.equal(4, greetInstance.getCounter());

        //  })

    
        // it ("this will be able to return all names",function(){
        //     let greetInstance = greetFunc();
        //     assert.equal('Molo Zola',greetInstance.xhosaGreet());
        // })
    // })
