const popUpVideoGameplay = document.getElementById("modalVideoGameplay")

const main = document.getElementById("areaPrincipal");
const header = document.getElementById("topBar");
const footer = document.getElementById("footer");

function abrirPopUp() {
    popUpVideoGameplay.classList.add("exibido");
    setTimeout(() => {
        popUpVideoGameplay.classList.add("aberto");
        setTimeout(() => {
            videoGameplay.play();
        }, 1000);
    }, 500);
    principal.classList.add("atenuado");
    main.classList.add("borrado");
    header.classList.add("borrado");
    footer.classList.add("borrado");
}

function fecharPopUp() {
    popUpVideoGameplay.classList.remove("aberto");
    setTimeout(() => {
        popUpVideoGameplay.classList.remove("exibido");
    }, 1000);
    videoGameplay.pause();
    principal.classList.remove("atenuado");
    main.classList.remove("borrado");
    header.classList.remove("borrado");
    footer.classList.remove("borrado");
}