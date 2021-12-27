const loginForm = document.querySelector("#login-form"); //querySelector로 찾으면 앞에 #붙여야 됨(#는 id의미),class도 있기때문에 id라는거 필수로 명시
const loginInput =document.querySelector("#login-form input"); //login gkdn
const h1 = document.querySelector("#greeting");

const HIDDEN_CLASSNAME= "hidden";
const USERNAME_KEY ="username";


function onLoginSubmit(event){
    // console.dir(loginInput); //dir로 사용자로 부터 받은 input값을 확인해보기 >> value
    // console.log("hello", loginInput.value); //element.value 는 html input에 입력받은 string을 받아옴


    //이 일일히 유효성 검사하는 법보다 브라우저가 해주는 방법이 있다.
    // const username = loginInput.value;
    // if(username ===""){
    //     alert("Please write your name");
    // }else if(username.length>15) {//사용자 이름 15자 넘으면 경고(string의 길이 확인하는 법?)
    //     alert("Your name is too long");
    // }


    //브라우저가 해주는 법(html의 기본 속성 최대한 잘 활용할 것)
    // Input,button element위에 form 태그으로 감싸주면, input,button에  길이, 필수요소인지를 설정하면 됨
    // 이렇게 하면 브라우저에서 15글자 이상이면 더 이상 안 쳐짐.
    // 문제) form 태그는 submit을 해버림(페이지 리프레쉬)


    /*목표 
    초기: h1는 안보임, form 은 보임
    form에서 이름을 받아오면, form은 사라지고 받아온 이름이h1에 보이게
    */

    event.preventDefault();//자동 실행되는 과정 막아주고(새로고침)
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,loginInput.value);
    paintGreetings();
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    h1.innerHTML=`Hello ${username}`;
    h1.classList.remove(HIDDEN_CLASSNAME);
}

//localStorage는 브라우저가 가지는 작은 database ("key","value")
const saveUsername= localStorage.getItem(USERNAME_KEY);

if(saveUsername===null){
    //local storge에 이름 없어, form 보이게 h1안보이게
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{// 이름 있어 >>form안보이게, h1 보이게
    paintGreetings();
   
}


// loginForm.addEventListener("submit", onLoginSubmit); //enter나 버튼 클릭할 경우 이벤트 

