/* eslint-env browser */
let imgList = [];
let imgSrc = '';
let imgCount = 0;

//이미지 미리보기
function addFile(input) {
    if(input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            let previewBox = `<img id='showImg' alt='내이미지'>`;
            document.querySelector('#showImgBox').insertAdjacentHTML('afterbegin', previewBox);
            imgSrc = e.target.result;
            document.getElementById('showImg').src = imgSrc;

            imgCount++;
            imgList[imgCount] = imgSrc;
        };
        reader.readAsDataURL(input.files[0]);
    }
    else {
        document.getElementById('showImg').src='';
    }
}


//리뷰등록
const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', () => {

    //이름,내용
    const name = document.getElementById('name').value;
    const content = document.getElementById('writeReviewArea').value;
    

    //현재날짜
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth()+1;
    let date = today.getDate();
    let fullDate = `${year}.${month}.${date}`;


    //별점
    let starValue = document.querySelector('input[type=radio][name=rating]:checked').value;

    if(starValue == 1) starValue='⭐';
    else if(starValue == 2) starValue='⭐⭐';
    else if(starValue == 3) starValue='⭐⭐⭐';
    else if(starValue == 4) starValue='⭐⭐⭐⭐';
    else if(starValue == 5) starValue='⭐⭐⭐⭐⭐';
   

    //리뷰박스생성
    let box = `<div class="showReviewBox">
                    <div class="information">
                        <img id="loginimg" src="image/loginimg.png" alt="내이미지">
                        <p class="name">${name}</p>
                        <p class="star">${starValue}</p>
                        <p class="date">${fullDate}</p>
                    </div>
                    <p class="content">${content}</p>
                    <div class="foodImgGroup"></div>
                </div>`

   document.querySelector('.showReview').insertAdjacentHTML('afterbegin', box);
  

   //이미지파일추가
   for(let i = 1 ; i <= imgCount ; i++) {
        let showBox = `<img id='foodImg' alt='음식이미지'>`;
        document.querySelector('.foodImgGroup').insertAdjacentHTML('afterbegin', showBox);
        document.getElementById('foodImg').src = imgList[i];
    }


    //다음리뷰작성을 위해 input값 초기화
   document.getElementById('name').value = null;
   document.getElementById('writeReviewArea').value = null;
   for(let i = 1 ; i <= imgCount ; i++) {
    document.getElementById('showImg').remove();
   }
   document.getElementById('myform').reset();
});
