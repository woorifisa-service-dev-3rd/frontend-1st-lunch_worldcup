const restaurants = ['이선생 짜글이', '킹콩 부대찌개', '명동칼국수', '김치도가'];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(restaurants);

const queryParams = new URLSearchParams([
  ['totalRound', 4],
  ['tempRound', 1],
]);

queryParams.toString();
localStorage.setItem('allRestaurants', JSON.stringify(restaurants));
const choices = [];
localStorage.setItem('choices', JSON.stringify(choices));


//hi