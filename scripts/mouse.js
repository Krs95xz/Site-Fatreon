let ativaRastro = document.getElementById("inputRastro");
let corRastro1 = document.getElementById("corRastro1");
let corRastro2 = document.getElementById("corRastro2");
let pontos = [];
let xS;
let yS;
let i = 0;
let x = 0;
let y = 0;
let gradiente = `linear-gradient(${corRastro1.value}, ${corRastro2.value})`;
let timer = null;
let intervalo = null;
let movendo = false;

corRastro1.addEventListener("input", () => {
    document.getElementById("cor1").style.background = corRastro1.value;
    gradiente = `linear-gradient(${corRastro1.value}, ${corRastro2.value})`
});
corRastro2.addEventListener("input", () => {
    document.getElementById("cor2").style.background = corRastro2.value;
    gradiente = `linear-gradient(${corRastro1.value}, ${corRastro2.value})`
});

function detectarParado() {
    clearTimeout(timer);
    timer = setTimeout(() => {
        parar();
    }, 300);
}
function executarRastro() {
    if (intervalo) {
        clearInterval(intervalo);
    }

    if (ativaRastro.checked) {
        movendo = true;
        window.addEventListener("pointermove", onMove);

        intervalo = setInterval(() => {
            seguir();
        }, 30);
    } else {
        movendo = false;
        window.removeEventListener("pointermove", onMove);
    }
}
function desativarRastro() {
    movendo = false;
    window.removeEventListener("pointermove", onMove);
}
function tamanho(quant) {
    let quantTamanho = quant.value;
    if (quantTamanho < 0) {
        quantTamanho = 0;
    } else if (quantTamanho > 500){
        quantTamanho = 500;
    }
    pontos.forEach(p => p.remove());
    for (let c = 1; c <= quantTamanho; c++) {
        pontos[c - 1] = document.createElement("div");
        pontos[c - 1].id = "pt"+c;
        pontos[c - 1].className = "pontos";
        document.body.appendChild(pontos[c - 1]);
    }
    xS = new Array(pontos.length).fill(0);
    yS = new Array(pontos.length).fill(0);
    i = 0;
}
function valores(event) {
    x = event.pageX;
    y = event.pageY;
    for (let k = 0; k < pontos.length; k++) {
        pontos[k].style.opacity = "1";
    }
}
function seguir() {
    if (i >= pontos.length) {
        i = 0;
    }
    pontos[i].style.left = `${x}px`;
    pontos[i].style.top = `${y}px`;
    pontos[i].style.background = gradiente;
    pontos[i].style.backgroundClip = "text";
    i ++;
}
function parar() {
    for (let j = 0; j < pontos.length; j++) {
        pontos[j].style.opacity = "0";
    }
}
function colocarRastro(valor) {
    let texto = valor.value;
    let j = 0;
    for (let z = 0; z < pontos.length; z++) {
        if (texto[j] == undefined) {
            j = 0
        }
        pontos[z].textContent = texto[j];
        j++
    }
}
function chamarFuncoes(valor1, valor2) {
    tamanho(valor1);
    colocarRastro(valor2);
}
function onMove(e) {
    valores(e);
    detectarParado();
}