const clock = document.querySelector("h2#clock");


function showClock(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0"); // padStart는 (string길이,길이 안넘을 경우 대체할 숫자) 인자로 받음. 지정 길이에 미달이면 데체할 숫자로 앞을 채워줌 
    const min = String(date.getMinutes()).padStart(2,"0");
    const sec = String(date.getSeconds()).padStart(2,"0");
    //clock.innerText= `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` ;
    clock.innerText= `${hour}:${min}:${sec}` ;
}

showClock();
setInterval(showClock,1000);//1초"마다" showClock를 실행한다.




//5초"마다" sayhello를 실행한다. 주식api를 2초마다 가져와야 할때 사용
// setInterval(sayHello,5000);

//5초 "뒤에" sayhello를 실행한다. 
// setTimeout(sayHello,5000);

