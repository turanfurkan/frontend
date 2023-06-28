let counterDom=document.querySelector("#counter")
let increaseDom=document.querySelector("#increase")
let decreaseDom=document.querySelector("#decrease")

let localStorageCounter=JSON.parse(localStorage.getItem("counter"))
let counter = 0
localStorageCounter !== null ? counter = localStorageCounter : counter = 0 

counterDom.innerHTML=counter;
increaseDom.addEventListener("click",clickEvent)
decreaseDom.addEventListener("click",clickEvent)

function clickEvent() {
    console.log(this.id)
    this.id == "increase" ? counter += 1 : counter -= 1
    counterDom.innerHTML = counter
    localStorage.setItem("counter",JSON.stringify(counter))
}

// localStorage.clear()