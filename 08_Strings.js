"use strict"

let greeting = " ---Hallo Welt!--- "


// Anzahl der Zeichen in einem String ausgeben
console.log(greeting.length)

// einzelnes Zeichen abfragen => 0 - unendlich

console.log(greeting.charAt(0))
console.log(greeting[14])

// wo findet sich ein zeichen im String
console.log(greeting.indexOf("!"))
console.log(greeting.indexOf("---"))  // findet nur das erste mal wo es vorkommt , 10 in die klammer dann sucht er erst ab dem zeichen 10

// großbuchstaben ausgeben
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())

// text ersetzen
console.log(greeting.replace("!", "!!!"))

// leerzeichen rechts und links vom String entfernen
console.log(greeting.trim())

// variable komplett ändern - ansonsten immer nur kopie
// greeting = greeting.toUpperCase()
// console.log(greeting)

// man kann es auch verbinden
console.log(greeting.trim().length + 5)