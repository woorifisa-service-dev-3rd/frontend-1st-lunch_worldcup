const images = new Map([
  ['이선생 짜글이', 'image/이가네짜글이.png'],
  ['킹콩 부대찌개', 'image/킹콩부대찌개.png'],
  ['김치도가', 'image/김치도가.png'],
  ['명동칼국수', 'image/명동칼국수.png'],
]);

const queryParams = new URL(window.location.href).searchParams;
const totalRound = queryParams.get('totalRound');
const tempRound = queryParams.get('tempRound');

console.log(totalRound, tempRound);

const restaurants = JSON.parse(localStorage.allRestaurants);
const leftValue = restaurants[2 * tempRound - 2];
const rightValue = restaurants[2 * tempRound - 1];

console.log(leftValue);
console.log(rightValue);

document.getElementById('right-img').src = images.get(rightValue);
document.getElementById('left-img').src = images.get(leftValue);

document.getElementById('left-menu-name').textContent = leftValue;
document.getElementById('right-menu-name').textContent = rightValue;

const leftChoice = document.getElementById('left-choice');
const rightChoice = document.getElementById('right-choice');

const roundCount = document.getElementById('round-count');
if (totalRound == 2) {
  roundCount.textContent = '결승전';
} else {
  roundCount.textContent = `${totalRound}강 ${tempRound}/${totalRound / 2}`;
}

// 사진 눌렸을 때 -> localStorage choice에 value 추가
leftChoice.addEventListener('click', () => {
  choice(leftChoice, leftValue);
});
rightChoice.addEventListener('click', () => {
  choice(rightChoice, rightValue);
});

function choice(target, value) {
  if ((totalRound / 2) == tempRound) { // 진행 (1/2, 2/2, 결승전)
    if (totalRound == 2) { // 결승전
      localStorage.setItem('winner', value);
      target.href = '/frontend-1st-lunch_worldcup/result/result.html';
    } else {
      const choices = JSON.parse(localStorage.choices);
      console.log(typeof choices);
      choices.push(value);
      localStorage.setItem('allRestaurants', JSON.stringify(choices));
      localStorage.setItem('choices', JSON.stringify([]));
      target.href = `/frontend-1st-lunch_worldcup/select/select.html?totalRound=${totalRound / 2}&tempRound=1`;
    }
  } else {
    const choices = JSON.parse(localStorage.choices);
    choices.push(value);
    localStorage.setItem('choices', JSON.stringify(choices));
    target.href = `/frontend-1st-lunch_worldcup/select/select.html?totalRound=${totalRound}&tempRound=${Number(tempRound) + 1}`;
  }
}
