// const formDom = document.getElementById("form");                         // YÖNTEM 1
// const inputDom = document.getElementById("email");
// const numberDom = document.getElementById("number");
// const ulListDom = document.getElementById("ul-list")


// formDom.addEventListener("submit",function(e){
//   e.preventDefault();

//   const liDom = document.createElement("li")
//   if(inputDom.value =="" && numberDom.value == ""){
//     return alert("hatalı giriş")
//   }else{
//     alert("kaydınız yapılmıştır")
//   }



// liDom.innerHTML = `${inputDom.value}

// <span class="badge bg-primary rounded-pill">${numberDom.value}</span> `
// liDom.classList.add('list-group-item', 'd-flex','justify-content-between')
// ulListDom.append(liDom)

// inputDom.value ="" , numberDom.value = ""

// })

///////////////////////////////////////////////////////////////////////////////////// YÖNTEM 2

let userFormDom = document.getElementById("form");   //form u alıyoruz.
userFormDom.addEventListener("submit",formHandler);   //submit metodu atayacağımız için function adı veriyoruz.

const alertDom = document.querySelector("#alert");

const alertFunction = (message,className = "warning")=> 
  `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
   ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

function formHandler(event){
event.preventDefault();

const USER_NAME = document.querySelector("#email");
const SCORE = document.querySelector("#number");


if(USER_NAME.value && SCORE.value){   //eğer username ve paralo değerleri girilirse 
 
  addItem(USER_NAME.value, SCORE.value)  //girilen verileri yani username ve parolayı addıtem e gönder ve value ları boş yapıp ilk mesajı gönder dedik
 
  todoTextUser =USER_NAME.value = USER_NAME.value;    //localStorage içerisine atmak için todoText içerisine username in value sunu attık ve username in value sunu localstorage attık. Aynı şekilde aşağısı içinde.
  todoTextPassword =SCORE.value = SCORE.value;

  USER_NAME.value = ""; //ve listeye giriş yapıldıktan sonra bu değerlerin boş olması için bu kısmı ayarladık
  SCORE.value = "";
 
    const todo = {  //value ları object oluşturup içerisine attık 
  
    user:todoTextUser,
    password:todoTextPassword,
  
  }
  
   const todos = JSON.parse(localStorage.getItem("todos")); // 
   todos.push(todo);
   localStorage.setItem("todos",JSON.stringify(todos))
  
addItem(todo);


  // console.log(todos)
  
   
  alertDom.innerHTML = alertFunction("congratulations","success")
  
}else{ //değilse de burayı gönder dedik
 

  alertDom.innerHTML = alertFunction("Eksik Bilgi Girdiniz","warning")

}
}



let  userListDom = document.querySelector("#ul-list");
let ulDiv = document.querySelector("#ulDiv");
let deleteAll = document.getElementById("deleteAll");


const addItem = (userName, score,todo) => {
  let liDom = document.createElement("li");
 
  liDom.innerHTML = `${userName}
   <span class="badge bg-primary rounded-pill">${score}</span> `

  liDom.classList.add('list-group-item','d-flex', 'justify-content-between', 'align-items-start')

  userListDom.append(liDom);

var deleteLi = document.createElement("button");

deleteLi.innerHTML ="Delete";

deleteLi.classList.add('btn','btn-danger','btn-md')
userListDom.append(deleteLi);

deleteLi.addEventListener("click",function(){
  liDom.remove();
  deleteLi.remove(); 

});

deleteAll.addEventListener("click",function(e){
  // ulDiv.remove()
  while(userListDom.firstChild){
    userListDom.removeChild(userListDom.firstChild);
}
localStorage.clear();

 e.preventDefault()
})
}

const startConf = ()=>{

  const todos = JSON.parse(localStorage.getItem("todos"));
if(!todos){
localStorage.setItem("todos",JSON.stringify([]));
  }else{
todos.forEach(todo =>{
  addItem(todo)
})
console.log(todos)
  }
}
startConf();




