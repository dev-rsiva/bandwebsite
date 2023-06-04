let burger = document.querySelector(".burger");
let links = document.querySelector(".navbar");


burger.addEventListener('click',()=> {
    links.classList.toggle("nav-show");
})
