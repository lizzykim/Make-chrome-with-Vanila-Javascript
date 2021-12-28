const images =["0.jpeg","1.jpeg","2.jpeg"];
const chosenImage = images[Math.floor(Math.random()*images.length)];


//지금까지 html에 만들어놓은 element를  querySelector로 가져왔다면,
//js 에서 element를 만들 수 있음. document.createElement()
const bgImage = document.createElement("img"); // === html의  <img src=""><img/>(태그 생성)
bgImage.src =`img/${chosenImage}`;  //src라는 특성 더해주기
document.body.appendChild(bgImage); //html body에 <img src=""><img/>(==bgImage) 추가하기, appendChild 사용하기