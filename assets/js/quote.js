var quotes = [
  "This is my dream? I'm not even sleeping.",
  'Everything takes longer than you think.',
  'Sooner your dream comes, sooner you get bored.',
  'Your life is fine, you are the disaster itself.',
  'Deny, anger, bragaining, depression and acceptance.',
  'Life seems but a quick succession of busy nothings.',
  'Our scars make us know that our past was for real.',
  'I cannot speak well enough to be unintelligible.',
  "I didn't choose this life.",
  'Every solution breeds new problems.',
  'This is not what I want, but this is what it should be.',
  'Good designer copy, great designer steal.',
  "I'm the designer of my own cataclysm.",
  'Spoiler, we die in the end.',
  'Failure builds character.',
  'If you get tired, learn to rest not quit.',
  'The pure and simple truth is rarely pure and never simple.',
  'Man invented language to satisfy his deep need to complain.',
  'But without the dark, we never see the stars.',
  'The world is full of monsters with friendly faces.',
  'Hell is empty and all the devils are here.',
  'Fake people have an image to maintain.',
  "Don't try to be the best, just try to be good.",
  "Words are free, it's how you use them that may cost you.",
  'Sometimes you have to unfollow people in real life.',
  "You can't chase happiness, you must create them.",
  "Everything's real but not everyone's true.",
  "What we know is a drop, what we don't know is an ocean.",
  'Time is just a stubborn illusion.',
  'Time without purpose is a prison.',
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').innerHTML = quotes[randomNumber];
}

newQuote();
