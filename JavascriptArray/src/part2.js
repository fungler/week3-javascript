
/* global k */

function add(n1, n2) {
    return n1 + n2;
}

var sub = function(n1, n2) {
    return n1 - n2;
};

var mul = function(n1, n2) {
    return n1 * n2;
};

var cb = function(n1, n2, callback) {
    if (typeof n1 === "number" && typeof n2 === "number" && typeof callback === "function")
        return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1,n2);
    else
        throw new Error();
};

//console.log( add(1,2) );     // What will this print? 3
//console.log( add );      // What will it print and what does add represent? a function
//console.log( add(1,2,3) ); // What will it print 3
//console.log( add(1) );	  // What will it print NaN
//console.log( cb(3,3,add) ); // What will it print 6
//console.log( cb(4,3,sub) ); // What will it print 1
//console.log(cb(3,3, add )); // What will it print (and what was the problem) putting () on the function, then you need to give it some arguements
//console.log(cb(3,"hh",add));// What will it print 3hh

// 3)
try {
    cb(1, 3, sub);
} catch(e) {
    console.error("Parameter types does not match the expected types.");
}

console.log(cb(100, 10, function(x, y) {
    return x / y;
}));

// Getting comfortable with filter, map and forEach:
const _names = ["Lars", "Jens", "Hans", "Boi", "Jesus", "Dorthe", "Bo"];
var names = _names.filter(x => x.length <= 3);

for (name in _names) {
    console.log(_names[name]);
}

for (name in names) {
    console.log(names[name]);
}

var uNames = names.map(name => name.toUpperCase());


var toHtml = function (array) {
    var res = array.map(x => "<li>" + x + "</li>");
    res.unshift("<ul>");
    res.push("</ul>");
    return res.join(''); 
};

var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

// Er ikke sikker på om det er sådan her de ønsker at opgaven skal løses?
// Forstår ikke helt hvad de vil have mig til. 
var filtered = cars.filter(function(item){
    return item.make === "Volvo" && item.year > 1998 && item.price < 5000;
});
console.log(filtered);

var makeSQL = function(json) {  
    return "INSERT INTO cars (id,year,make,model,price) VALUES ("+ json.id + "," + json.year + "," + json.make + "," + json.model + "," + json.price + ")";
};

for (k in cars) {
    console.log(makeSQL(cars[k]));
}

// Output was as expected. Timers will be printed last.
var msgPrinter = function(msg,delay){
  setTimeout(function(){
    console.log(msg);
  },delay);
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");


//function Person(name){
//  this.name = name;
//  console.log("Name: "+ this.name);
//  setTimeout(function(){
//    console.log("Hi  "+this.name);  //Explain this: you can not do this.name as we are in another scope. 'this', here, refers to the setTimout functon
//  },2000);
//}
//
//Person("Kurt Wonnegut");  //This calls the function
//console.log("I'm global: "+ name);  //Explain this: In a function, this refers to the global object
//
//var p = new Person("Mike");  //Create an instance using the constructor function
//console.log("I'm global: "+ name);  //What’s different ?: Still uses Kurt Wonnegut

// FIX 1
function Person(name){
  this.name = name;
  var self = this;
  console.log("Name: " + this.name);
  setTimeout(function(){
    console.log("Hi " + self.name);
  },2000);
}

// FIX 2
function Person(name){
  this.name = name;
  console.log("Name: "+ this.name);
  setTimeout(function(){
    console.log("Hi  "+this.name); 
  }.bind(this),2000);
}


var greeter = function(){
  console.log(this.message);
};
var comp1 = { message: "Hello World" };
var comp2 = { message: "Hi" };

var g1 = greeter.bind(comp1);//We can store a reference, with a specific “this” to use
var g2 = greeter.bind(comp2);//And here another “this”
setTimeout(g1,500);
setTimeout(g2,1000);
