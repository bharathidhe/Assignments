//declaration
//initialisation

var course= 'playwright'//string
//3. reinitsialisation
course ="cypress"
course =56356536
course = false
console.log(course);

//redeclaration
var course="selenium"
console.log(course);

5.hoisting
-------->
console.log(duration);
var duration ="2 months"

//scoping 
function getNationality(){d
//scope is restricted to this function only 
    var country="India"
    console.log(country)

}
getNationality()
 console.log(country);  //refrence error because country is not defined in this scope 


