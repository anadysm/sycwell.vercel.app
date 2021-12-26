var randomQ = randomInt(0, 10);
function randomInt(lowest, size) {
  return Math.floor(Math.random() * size) + lowest;
}

var greetElem = document.getElementById('greet');

greetElem.innerHTML = getGreet(randomQ);

function getGreet(n) {
  var greets = [
    'a great',
    'a magnificent',
    'a miracle',
    'a super',
    'an ace',
    'an excellent',
    'an amazing',
    'a supreme',
    'a beautiful',
    'a fabulous',
  ];

  return greets[n];
}

var randomQ = randomInt(0, 10);
function randomInt(lowest, size) {
  return Math.floor(Math.random() * size) + lowest;
}

var traitElem = document.getElementById('trait');

traitElem.innerHTML = getTrait(randomQ);

function getTrait(n) {
  var traits = [
    ' bold ',
    ' calm ',
    ' strong ',
    ' tough ',
    ' cool ',
    ' cute ',
    ' charm ',
    ' positive ',
    ' focused ',
    ' patient ',
  ];

  return traits[n];
}

var arrayOfWeekdays = [
  'sunday!',
  'monday!',
  'tuesday!',
  'wednesday!',
  'thursday!',
  'friday!',
  'saturday!',
];

var dateObj = new Date();
var weekdayNumber = dateObj.getDay();
var weekdayName = arrayOfWeekdays[weekdayNumber];
document.getElementById('day').innerHTML = weekdayName;
