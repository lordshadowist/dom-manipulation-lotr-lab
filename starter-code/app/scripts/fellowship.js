console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  var middleEarth = document.createElement("section");
  middleEarth.setAttribute("id", "middle-earth");
  for(var i = 0; i < lands.length; i++)
  {
    var land = document.createElement("article");
    land.setAttribute("id", lands[i]);
    var landName = document.createElement("h1");
    landName.textContent = lands[i];
    land.appendChild(landName);
    middleEarth.appendChild(land);
  }
  body.appendChild(middleEarth);
}

makeMiddleEarth();


// Part 2

function makeHobbits() 
{
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  var shire = document.getElementById("The Shire");
  var heroes = document.createElement("ul");
  for(var i = 0; i < hobbits.length; i++)
  {
    var hobbit = document.createElement("li");
    hobbit.setAttribute("class", "hobbit");
    hobbit.textContent = hobbits[i];
    heroes.appendChild(hobbit);
  }
  shire.appendChild(heroes);
}


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var frodo = document.getElementsByClassName("hobbit")[0]; // fingers crossed it's Frodo
  var ring = document.createElement("div");
  ring.setAttribute("id", 'magic-imbued-jewelry');
  ring.addEventListener("click", nazgulScreech);
  frodo.appendChild(ring);
}


// Part 4


function makeBuddies() 
{
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var rivendell = document.getElementById("Rivendell");
  var supportList = document.createElement("aside");
  var support = document.createElement("ul");
  for(var i = 0; i < buddies.length; i++)
  {
    var buddy = document.createElement("li");
    buddy.setAttribute("class", "buddy");
    buddy.textContent = buddies[i];
    support.appendChild(buddy);
  }
  supportList.appendChild(support);
  rivendell.appendChild(supportList);
}


// Part 5


function beautifulStranger() 
{
  var strider = document.getElementsByClassName("buddy")[3];
  strider.textContent = "Aragorn";
}


// Part 6

function leaveTheShire() 
{
  var heroes = document.getElementsByClassName("hobbit");
  var rivendell = document.getElementById("Rivendell");
  var shire = document.getElementById("The Shire");
  for(var i = 0; i < heroes.length; i++)
  {
      rivendell.appendChild(heroes[i]);
      shire.removeChild(heroes[i]);
  }
}


// Part 7


function forgeTheFellowShip() 
{
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var fellowship = document.createElement("div");
  fellowship.setAttribute("id", "the-fellowship");
  var fellows = document.createTextNode("the-fellowship");
  fellowship.appendChild(fellows);
  var rivendell = document.getElementById("Rivendell");
  rivendell.appendChild(fellowship);
  var heroes = document.getElementsByClassName("hobbit");
  var support = document.getElementsByClassName("buddy");
  for(var i = 0; i < heroes.length; i++)
  {
      fellowship.appendChild(heroes[i]);
      alert(heroes[i].textContent + " has joined your party");
      fellowship.appendChild(support[i]);
      alert(support[i].textContent + " has joined your party");
  }

  fellowship.appendChild(support[4]);
  alert(support[4].textContent + " has joined your party");

}


// Part 8


function theBalrog() 
{
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  var gandalf = document.getElementsByClassName("buddy")[0];
  gandalf.textContent = "Gandalf the White";
  gandalf.style.backgroundColor = "white";
  gandalf.style.border = "2px solid grey";
}


// Part 9

function hornOfGondor() 
{
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  alert("Horn of Gondor has been blown!");
  var boromir = document.getElementsByClassName("buddy")[4];
  boromir.style.textDecoration = "line-through";
  var fellowship = document.getElementById("the-fellowship");
  fellowship.removeChild(boromir);
}


// Part 10

function itsDangerousToGoAlone()
{
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  var fellowship = document.getElementById("the-fellowship");
  var mordor = document.getElementById("Mordor");
  var doom = document.createElement("div");
  doom.setAttribute("id", "mount-doom");
  var frodo = document.getElementsByClassName("hobbit")[0];
  var sam = document.getElementsByClassName("hobbit")[1];
  var rivendell = document.getElementById("Rivendell");
  var fellowship = document.getElementById("the-fellowship");
  mordor.appendChild(frodo);
  mordor.appendChild(sam);
  rivendell.removeChild(frodo);
  rivendell.removeChild(sam);
  fellowship.removeChild(frodo);
  fellowship.removeChild(sam);
  mordor.appendChild(doom);
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var gollum = document.createElement("div");
  gollum.setAttribute("id", "gollum");
  var mordor = document.getElementById("Mordor");
  mordor.appendChild(gollum);
  var ring = document.getElementById("the-ring");
  var frodo = document.getElementsByClassName("hobbit")[0];
  gollum.appendChild(ring);
  frodo.removeChild(ring);
  var doom = document.getElementById("mount-doom");
  doom.appendChild(gollum);
}


// Part 12

function thereAndBackAgain() 
{
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document ???
  // Move all the hobbits back to the shire
  var doom = document.getElementById("mount-doom");
  var mordor = document.getElementById("Mordor");
  var gollum = document.getElementById("gollum");
  mordor.removeChild(gollum);
  doom.removeChild(gollum);
  var frodo = document.getElementsByClassName("hobbit")[0];
  var sam = document.getElementsByClassName("hobbit")[1];
  var merry = document.getElementsByClassName("hobbit")[2];
  var pip = document.getElementsByClassName("hobbit")[3];
  var rivendell = document.getElementById("Rivendell");
  var fellowship = document.getElementById("the-fellowship");
  rivendell.removeChild(fellowship);
  rivendell.removeChild(merry);
  rivendell.removeChild(pip);
  var shire = document.getElementById("The Shire");
  var heroes = document.getElementsByClassName("hobbit");
  for(var i = 0; i < heroes.length; i++)
  {
    shire.appendChild(heroes[i]);
  }

}
