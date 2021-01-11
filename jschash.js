
// var fs = require('fs');
var faker = require('faker');

var peoples =[]
for(var i=0; i<10;i++){
    var people = {}
    people.name = faker.name.findName();
    people.email = faker.internet.email();
    people.address = {
        city: faker.address.city(),
        country: faker.address.country(),
        let:faker.address.latitude(),
        long:faker.address.longitude()

    };
    
      fs.writeFile('demo.json',JSON.stringify(peoples),function(err,data){
         console.log("data created successfully")
        })
}
console.log(peoples)