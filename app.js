// OBJECT LITERALS
// const pikachu = {
//   name: "Pikachu",
//   age: 6,
//   type: "Electric",
//   speak: function(){
//     console.log(`My name is ${this.name}`);    
//   }
// }

// console.log(pikachu.name);
// pikachu.speak();


// CONSTRUCTOR FUNCTIONS
// function Pokemon(name, age, type, goblin){ // arguments in constructive function
//   this.name = name; // key:value
//   this.age = age;
//   this.type = type;
//   this.description = function(){
//     console.log(`${this.name} is ${this.age} years old and is a ${this.type} type`);    
//   },
//   this.callback = goblin; // callback is now a function
// }

// function logThis(){
//   console.log(this);
  
// }

// const pikachu = new Pokemon("Pikachu", 6, "electric", logThis);
// const bulbasaur = new Pokemon("Bulbasaur", 3, "grass");
// const charmander = new Pokemon("Charmander", 4, "fire");
// pikachu.description();
// pikachu.callback();
// console.log(pikachu);
// console.log(charmander);
// console.log(bulbasaur);

// ===== CONSTRUCTOR FUNCTION LAB =====

// Task : create an array of 52 card objects, each with a suit, number and value
// eg deck[2], number === 2          deck.[2].suit === 'hearts' 


function Card(number, suit, value) {
  this.number = number;
  this.suit = suit;
  this.value = value;
}

const deck = [];
const suit = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];


for (let i = 0; i < suit.length; i++) { // loop through suits array 
  
  for (let j = 1; j < 14; j++) { // for each suit, make 13 cards and store in deck 
    let newCard;
    switch (j) {
      case 1:
        newCard = new Card("Ace", suit[i], j + 1);
        break;
      case 13:
        newCard = new Card("King", suit[i], j + 1);
        break;
      case 12:
        newCard = new Card("Queen", suit[i], j + 1);
        break;
      case 11:
        newCard = new Card("Jack", suit[i], j + 1);
        break;

      default:
        newCard = new Card(j, suit[i], j + 1);
        break;

    }

    deck.push(newCard);
    
//   }
  
// }

// console.log(deck);


// PROTOTYPES

// Object.prototype.whatAmI = function() {  // master data type
//   console.log('Make him an offer he cant refuse');
  
// }

// Card.prototype.move = function() {   // target object then glue object with a function
//   console.log('Hello world, your move');
  
// }

// Card.prototype.me = function() {
//   console.log(this);
  
// }

// deck[0].move();
// deck[0].me();
// deck[0].whatAmI();
// OBJECT.CREATE



// NEW OBJECT


// CLASSES

class Deck {
  appearance() {
    console.log("I have a black and white pattern and was made in France");
    
  }

}
// subclasses

class Card extends Deck {  // bring deck into card
  
  constructor(number, suit, value = 200) {
    super(); // access to whatever you are extending
    this.number = number;
    this.suit = suit;
    this.value = value;
  }

  greeting(){
    console.log('Hello world');
    
  }

  static staticMethod() {
    console.log("I'm a static method");
    
  }

}

Card.staticMethod();

const newCard = new Card(1, "Spades");
console.log(newCard);

newCard.greeting();