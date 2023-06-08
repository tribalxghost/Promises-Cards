// PART 1
let numbers = [];

for (let i = 0; i < 5; i++) {
  numbers.push(axios.get("http://numbersapi.com/random/year?json"));
}

Promise.all(numbers).then((arr) => {
  for (n of arr) {
    $("#list").append(`<li>${n.data.text}</li>`);
  }
});

for (let i = 0; i < 4; i++) {
  let favNumber = axios
    .get("http://numbersapi.com/20")
    .then((res) => $("#fav").append(`<li>${res.data}</li>`));
}

// // PART 2
// let deck = axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
// .then(res =>
//     axios.get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`))
// .then(card => console.log(card.data.cards[0].suit,card.data.cards[0].value))

// REQUEST TO SHUFFLE DECK AND DRAW CARD

let count = 0;
let deck = axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
.then(deck => {return deck})
.then(deck => { $("#draw").on("click", function () {
    axios.get(
      `https://deckofcardsapi.com/api/deck/${deck.data.deck_id}/draw/?count=1`
    )
.then(deck => { console.log(deck)
return deck})
  .then((card) =>
    $("#deck").append(
      `<img id = ${count} src= ${card.data.cards[0].image}></img>`
    )
  );



var rotation = 0;
var degrees = count;
degree = count;
//$('.img').addClass('rotated'); // for one time rotation
$(`#${count}`).css({
  transform: "rotate(" + degrees + "deg)",
});

return (count = count + 40);
});})


// https://deckofcardsapi.com/api/deck/${res.data.deck_id}/pile/player1/add/?cards=AS,2S



// ASYNC AND AWAIT PROJECT
// let count = 0
// let rotation = 0;
// async function getCard() {
//     let deck = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//     let hand = await axios.get(`https://deckofcardsapi.com/api/deck/${deck.data.deck_id}/draw/?count=1`)
//     console.log(hand.data.cards[0].code, hand.data.cards[0].value)
//     $("#draw").on("click", async function () {
//         let hand = await axios.get(`https://deckofcardsapi.com/api/deck/${deck.data.deck_id}/draw/?count=1`)
//         await $("#deck").append(
//             `<img id = ${count} src= ${hand.data.cards[0].image}></img>`
//         )
//         await $(`#${count}`).css({
//             transform: "rotate(" + rotation + "deg)",
//         });
//         rotation += 100
//         return count++
//     })

// }

// getCard()