let counter = 0;

let domCounter = document.getElementById("counter")

let domCrease = document.getElementById("increase")
let domDegrease = document.getElementById("decrease")

domCounter.innerHTML = 0

domCrease.addEventListener("click",clickEvent)
domDegrease.addEventListener("click",clickEvent)

-----------------------------------------------------1
// function clickEvent(){
//     console.log(this.id)
//     if(this.id == "increase"){
//       domCounter.innerHTML = counter += 1
//     }else {
//         domCounter.innerHTML = counter -= 1
//     }
// }
-----------------------------------------------------2
// function clickEvent(){
//     console.log(this.id)
//     this.id == "increase"? domCounter.innerHTML = counter += 1 :
//         domCounter.innerHTML = counter -= 1
    
// }
-----------------------------------------------------3
function clickEvent (){
    this.id == "increase" ? counter += 1 : counter -= 1; domCounter.innerHTML = counter
}

-----------------------------------------------------4
domİncrease.addEventListener("click",function(){
    domCounter.innerHTML = counter += 1
});

domDecrease.addEventListener("click",function(){
    domCounter.innerHTML = counter -= 1
})

-----------------------------------------------------5
    let counter = 0;

updateDisplay();

domİncrease.addEventListener("click",()=>{
    counter++;
    updateDisplay();
}) ;

domDecrease.addEventListener("click",()=>{
    counter --;
    updateDisplay();
});

function updateDisplay(){
    domCounter.innerHTML = counter;
};
