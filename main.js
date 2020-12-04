function onClick(){
    console.log('clicked');
    let el = document.querySelector("button");
    el.classList.remove("li");
    let h2 = document.querySelector("h2");
    h2.classList.add("hidden");
    
}
let el = document.querySelector("button");
el.addEventListener('click', onClick);

