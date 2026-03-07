const popUpVideoGameplay = document.getElementById("modalVideoGameplay")

const main = document.getElementById("areaPrincipal");
const header = document.getElementById("topBar");
const footer = document.getElementById("footer");

function abrirPopUp() {
    setTimeout (() => {
        popUpVideoGameplay.style.opacity = "1";
        setTimeout(() => {
            videoGameplay.play();
        }, 1000);
    }, 500);
    popUpVideoGameplay.style.display = "block";
    principal.style.opacity = 0.4;
    main.style.filter = "blur(10px)";
    header.style.filter = "blur(10px)";
    footer.style.filter = "blur(10px)";
}

function fecharPopUp() {
    setTimeout (() => {popUpVideoGameplay.style.display = "none";}, 1000);
    videoGameplay.pause();
    popUpVideoGameplay.style.opacity = "0";
    principal.style.opacity = 1;
    main.style.filter = "none";
    header.style.filter = "none";
    footer.style.filter = "none";
}