const btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `"Life isn’t about getting and having, it’s about giving and being."`,
    person: `"Kevin Kruse"`,
  },
  {
    quote: `"Whatever the mind of man can conceive and believe, it can achieve."`,
    person: `"Napoleon Hill"`,
  },
  {
    quote: `"Strive not to be a success, but rather to be of value."`,
    person: `"Albert Einstein"`,
  },
  {
    quote: `"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference."`,
    person: `"Robert Frost"`,
  },
  {
    quote: `"I attribute my success to this: I never gave or took any excuse."`,
    person: `"Florence Nightingale"`,
  },
  {
    quote: `"You miss 100% of the shots you don’t take."`,
    person: `"Wayne Gretzky"`,
  },
  {
    quote: `"The most difficult thing is the decision to act, the rest is merely tenacity."`,
    person: `"Amelia Earhart"`,
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  //console.log(rand);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
