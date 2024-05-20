const images = ["0.jpeg","1.jpeg","2.jpeg"]; //array형태로 이미지파일 선언
const chosenImage = images[Math.floor(Math.random() * images.length)]
const bgImage = document.createElement("img")

bgImage.src=`img/${chosenImage}`; //src : source

document.body.appendChild(bgImage); //appendchild() : body에 html 추가
