const h1 = document.querySelector("div.hello:first-child h1");
const body = document.querySelector("body");
const image = document.querySelector("img");
const clickedClass = "active";
function handleTitleClick() {
    if (!h1.classList.contains("active")) {
        h1.innerText = "야간모드!";
    } else
    {
        h1.innerText = "주간모드!";
    }
    h1.classList.toggle(clickedClass);
    /*
    const back = body.style.backgroundColor;
    if (back === "white") 
        body.style.backgroundColor = "darkgrey";
    else
        body.style.backgroundColor = "white";
    */
    body.classList.toggle(clickedClass);
    image.classList.toggle(clickedClass);
    
}

h1.addEventListener("click", handleTitleClick);

const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    const username = loginInput.value;
    console.log("반가워요! " + username);
}

function handleLinkClick(event) {
    console.log(event);
    alert("clicked!");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);