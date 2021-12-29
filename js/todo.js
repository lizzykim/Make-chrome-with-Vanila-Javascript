const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input"); // input에 사용자가 적은 todo 담은 변수
const toDoInput = document.querySelector("#todo-form input");//위에랑 같음
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let toDos=[];//localstorage는 string만 저장 가능. array 저장 안됨 ["eat","sleep"] 보다 [{id:asdh,text:"eat"},{}]로 집어넣어야돼

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)); //JSON.stringify는 모든 object를 json && "" 문자열로 저장 가능
}

//JSON.stringify(localStorage.getItem("todos"));  //그냥 문자열
// >> '"[\\"a\\",\\"b\\",\\"c\\",\\"bn\\",\\"d\\"]"'
//JSON.parse(localStorage.getItem("todos")); //object 형태의 문자열
// >> ['a', 'b', 'c', 'bn', 'd']



//버튼 누르면 li(span,button)사라져야됨
function deleteTodo(event){
    const li = event.target.parentElement;
    console.log(typeof li.id);
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //
    li.remove();
    saveToDos();
    /*toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); 
    를 통해 'filter 된 새로운 리스트를 생성하고'
    saveToDos()로 변한 값을 다시 한 번 저장시켜서 결과적으로 '덮어 씌우는 모양'이 되는거로 이해 */

}

//받은 todo를 화면에 보여주는 것
/*html에 원하는 화면
<ul id="todo-list">
    <li>
        <span></span> //todo 보여지는 부분
        <button></button> //todolist 삭제 버튼
    </li>
    <li>
        <span></span>
    </li>
    <li>
        <span></span>
    </li>
</ul>
*/
function paintToDo(newTodo){ //object전달 받아
    const li= document.createElement("li"); //list하나만들어주자
    li.id = newTodo.id;
    const span = document.createElement("span");//span이 li 하위에 있어야돼
    span.innerText = newTodo.text;
    const button = document.createElement("button"); //버튼 생성.버튼 누르면 사라지는 eventlistener설정해줘야됨
    button.innerText="❌";
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);//span이 li 하위에 있어야돼, li는 span이라는 child가 생김
    li.appendChild(button);// button li 밑으로 들어가야됨
    toDoList.appendChild(li); //li를 list에 붙이기
}


function handleToDoSubmit(event){
    event.preventDefault(); //form의 기본속성을 제출되고 새로고침, 이를 막기위해 preventDefault앞에 설정
    console.log(toDoInput.value);
    const newTodo = toDoInput.value;//입력한 todo 내용 담은 변수
    toDoInput.value="";
    const newTodoObj ={
        text: newTodo,
        id: Date.now(), //랜덤 시간 나옴
    };
    toDos.push(newTodoObj); //여기서는 사용자가 적은 text만 추가했는데, object로 추가하고 싶어!!
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);


function sayHello(item){//item은 현재 array에서 각 원소를 넘겨줌
    console.log("This is the term of "+item);
}

const savedToDos2 = localStorage.getItem(TODOS_KEY);//localstorge에서 todo가져오기
console.log(savedToDos2);

if(savedToDos2 !== null){//만일 localstorge에 savedToDos가 존재하면
    const parsedToDos = JSON.parse(savedToDos2); //parsedToDos는 object 형태의 문자열 ex) ["eat","sleep"]
    toDos = parsedToDos;
    //둘 다 같이 쓸 수 있음
    parsedToDos.forEach(paintToDo);//forEach는 array의 각 item 에 대해 function 을 실행하게 해줌
    // parsedToDos.forEach((item) => console.log("This is the term of "+ item));
}



