const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // "input" == "#todo-form input" 
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todoS"
let toDos = []; //항상 빈 array로 시작하는데, 우리가 원하는 것은 toDos array가 시작될 때, localstorage에서 발견되는 이전의 toDO들로 하고 싶은 것! 

function saveToDos(){
    localStorage.setItem("TODOS_KEY", JSON.stringify(toDos)); //JSON.stringify() : 브라우저가 갖고있는 어떤 것이든 string으로 바꿔주는 기능
}

function deleteToDo(event){
    const li = event.target.parentElement; //target은 click된 html의 element, parentElement는 click된 element의 부모(li), 즉, 각각의 todo 옆에 있는 X 버튼들 중 어느 것을 눌렀고 삭제해야하는지 알 수 있도록 하기 위함.
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); //클릭한 li.id와 다른 것들은 남겨두고 싶다는 의미
    //li.id는 string이고 toDo.id는 number라서 parseInt를 활용해서 문자열을 숫자로 바꾸는 작업 필요
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); //span이 li내부에 있지 않기 때문에 넣어주는 코드, append는 맨 마지막에 놓여져야 함!!, 순서 중요!!!
    li.appendChild(button); //button을 li에 넣어줌, span밑에 넣지 않으면 X이모지가 먼저 출력되어버려서 순서 중요!
    toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
    event.preventDefault(); //새로고침되는 것(submit)을 막음
    const newTodo = toDoInput.value; //입력 값을 초기화하기 전에 저장(즉, input의 새로운 value를 새로운 변수에 복사), 이후에 toDoInput.value 값이 초기화된다고 해서 newTodo까지 사라지는 것은 아님!
    toDoInput.value = ""; // 엔터 누를 때마다 안의 value(입력한 값) 초기화
    const newTodoObj = {
        text: newTodo,
        id: Date.now(), //id로 li item들을 구별하기 위함.
      };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit); //submit == event(인수), submit라는 event가 일어날 때 handleToDoSubmit함수 실행 

const saveToDos = localStorage.getItem(TODOS_KEY);

if (saveToDos) { //또는 if(saveToDos != null){} 
    const parsedToDos = JSON.parse(saveToDos); //JSON.parse() : string을 object로 변환시켜줌
    toDos = parsedToDos; //toDos에 parsedToDos를 넣어서 전에 있던 toDo들 복원(새로고침을 해도 toDO들이 사라지지 않게..)
    parsedToDos.forEach(paintToDo);
}
