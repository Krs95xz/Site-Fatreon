ativaRastro = document.getElementById("inputRastro");
corRastro1 = document.getElementById("corRastro1");
corRastro2 = document.getElementById("corRastro2")
dados = document.getElementsByClassName("dados");
var disparoDiv = false;
conteudo = document.getElementById("conteudo");
conteudo.addEventListener("mouseenter", () => {
    disparoDiv = false;
});
conteudo.addEventListener("mousemove", () => {
    disparoDiv = false;
})
conteudo.addEventListener("mouseleave", () => {
    disparoDiv = true;
})
function propriedades() {
    if (ativaRastro.checked == true) {
        ativar();
    }
    else {
        desativar();
    }
}
setInterval(() => {
    if (ativaRastro.checked == true && disparoDiv) {
        document.addEventListener("mousemove", valores);
    } else {
        document.removeEventListener("mousemove", valores);
    }
}, 200);
var pontos = [];
var xS;
var yS;
var i = 0;
function tamanho(quant) {
    let quantTamanho = quant.value;
    if (quantTamanho < 0) {
        quantTamanho = 0;
    } else if (quantTamanho > 500){
        quantTamanho = 500;
    }
    pontos.length = 0;
    pontos = [];
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
var x = 0;
var y = 0;
var c1 = 0;
function valores(event) {
    x = event.pageX - 9;
    y = event.pageY;
    for (var k = 0; k < pontos.length; k++) {
        pontos[k].style.display = "block";
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
        pontos[i].style.background = "linear-gradient("+corRastro1.value+", "+corRastro2.value+")";
        pontos[i].style.backgroundClip = "text";
        pontos[i].style.color = "transparent"; 
    }
    i++;
}
setInterval(seguir, 30);
function parar() {
    if (c1 === x) {
        for (var j = 0; j < pontos.length; j++) {
            pontos[j].style.display = "none";
        }
    } else {
        c1 = x;
    }
}
setInterval(parar, 200)
function paraInsercao() {
    for (let r = 0; r < pontos.length; r++) {
        pontos[r].style.display = "none";
    }
}
function ativar() {
    for(let z = 0; z < dados.length; z++) {
        dados[z].style.display = "block"
    }
}
function desativar() {
    for(let z = 0; z < dados.length; z++) {
        dados[z].style.display = "none"
    }
}
function colocarRastro(valor) {
    let texto = valor.value;
    let j = 0;
    for (let z = 0; z < pontos.length; z++) {
        if (texto[j] == undefined) {
            j = 0
        }
        pontos[z].innerText = texto[j];
        j++
    }
}
function chamarFuncoes(valor1, valor2) {
    tamanho(valor1);
    colocarRastro(valor2);
}