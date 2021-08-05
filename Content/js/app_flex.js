const h1 = document.querySelector("header h1");
const header = document.querySelector("header");
const modeButton = document.querySelector(".emoji .square");
const body = document.querySelector("body");
const clickedClass = "active";
function getParameter(name)
{
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

const username = getParameter("name");

h1.innerText = "Hello! " + username.toUpperCase() + "!";

function handleMode(event) {
    modeButton.classList.toggle(clickedClass);
    body.classList.toggle(clickedClass);

     if (!modeButton.classList.contains("active")) {
        modeButton.innerText = "야간모드 '해줘!'";
    } else
    {
        modeButton.innerText = "주간모드 '해줘!'";
    }
}
modeButton.addEventListener("click", handleMode);