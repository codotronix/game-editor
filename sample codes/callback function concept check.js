

//Cow class

//Cow class
function Cow (name) {
    this.name = name;
    Cow.prototype.speak = function () {
        console.log(this.name + " says moooo...");
    }
}

var aCow = new Cow ("A");
var bCow = new Cow ("B");

aCow.speak();
bCow.speak();


var listener = [];

function addToListener (fn, objectInstance) {
    listener.push({
        "objInstance": objectInstance,
        "fn": fn
    });
}

addToListener(aCow.speak, aCow);
addToListener(bCow.speak, bCow);

//call the listeners
console.log("Calling callback listeners");
var fn, oi;
for (var i in listener) {
    listener[i].fn.apply(listener[i].objInstance)
}