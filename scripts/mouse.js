var ativaRastro = document.getElementById("inputRastro");
var corRastro1 = document.getElementById("corRastro1");
var corRastro2 = document.getElementById("corRastro2");
var pontos = [];
var xS;
var yS;
var i = 0;
var x = 0;
var y = 0;
var gradiente = `linear-gradient(${corRastro1.value}, ${corRastro2.value})`;
var timer = null;

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
    }, 50);
}
function executarRastro() {
    if (ativaRastro.checked) {
        window.addEventListener("mousemove", onMove);
    } else {
        window.removeEventListener("mousemove", onMove);
    }
}
function desativarRastro() {
    window.removeEventListener("mousemove", onMove);
}
function tamanho(quant) {
    let quantTamanho = quant.value;
    if (quantTamanho < 0) {
        quantTamanho = 0;
    } else if (quantTamanho > 200){
        quantTamanho = 200;
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
    for (var k = 0; k < pontos.length; k++) {
        pontos[k].style.opacity = "1";
    }
}
function seguir() {
    if (i >= pontos.length) {
        i = 0;
    }
    if (i <= pontos.length - 1) {
        yS[i] = y;
        xS[i] = x;
    }
    if (i < pontos.length) {
        pontos[i].style.left = xS[i] + "px";
        pontos[i].style.top = yS[i] + "px";
        pontos[i].style.background = gradiente;
        pontos[i].style.backgroundClip = "text";
    }
    i++;
}
function parar() {
    for (var j = 0; j < pontos.length; j++) {
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
    seguir();
    detectarParado();
}