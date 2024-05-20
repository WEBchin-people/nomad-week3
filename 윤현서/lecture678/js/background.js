const images = [
    //파일명이랑 같도록 작성
    "0.jpg",
    "1.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//js로 html 문서에 img 태그를 만들어보기
//<img src="img/0.jpg">
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
console.log(bgImage);
//아직 존재하지 않으므로 body에 추가해주기
document.body.appendChild(bgImage);

//Q. appendChild를 사용할 때 body에 넣고 싶은 위치에 정확히 넣으려면 어떻게 하나요?
//A. insertBefore() 메소드를 사용
/*
const h2 = document.querySelector("#clock") //참조할 노드
document.body.insertBefore(bgImage, h2);
h2요소 앞에 bgImage가 추가되게 됩니다.
*/