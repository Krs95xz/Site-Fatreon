const data = new Date()
const diaSem = data.getDay()
const diasSem = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
let dia = data.getDate()
let mes = data.getMonth()
let ano = data.getFullYear()
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
let textos = document.getElementsByClassName("textos");
const videoGameplay = document.getElementById("gameplayFatreon");
const aside = document.getElementById("conteudo");
const asideMouse = document.getElementById("configuracoesMouse");

videoGameplay.addEventListener("play", () => {
    videoGameplay.volume = 0.55;
});

function abrirTollMouse() {
    const principal = document.getElementById("principal")
    if (asideMouse.style.opacity >= 1) {
        setTimeout(() => {
            asideMouse.style.display = "none"
        }, 500);
        asideMouse.style.opacity = "0"
        aside.style.width = "60px"
        principal.style.width = "100%"
        principal.style.transition = "0.5s"
    } else {
        asideMouse.style.display = "block"
        setTimeout(() => {
            asideMouse.style.opacity = "1"
            aside.style.width = "30%"
            principal.style.width = "70%"
            principal.style.transition = "0.5s"
        }, 100);
    }
}
function fecharTollMouse() {
    const principal = document.getElementById("principal")
    setTimeout(() => {
        asideMouse.style.display = "none"
    }, 500);
    asideMouse.style.opacity = "0"
    aside.style.width = "60px"
    principal.style.width = "100%"
    principal.style.transition = "0.5s"
}

opacidadeFundoSobre = document.getElementById("opacidadeFundo")
opacidadeFundoSobre.addEventListener("input", (valor) => {
    let fundo = document.getElementById("sobre")
    fundo.style.opacity = valor.target.value
    if (fundo.style.opacity <= 0.6) {
        fundo.style.pointerEvents = "none"
        fundo.style.userSelect = "none"
    } else {
        fundo.style.pointerEvents = "auto"
        fundo.style.userSelect = "auto"
    }
})

document.getElementById("diaSem").textContent = diasSem[diaSem];

if (window.innerWidth >= 500) {
    document.getElementById('dia').textContent = `Dia: ${dia} | Mês: ${meses[mes]} | Ano: ${ano}`;
} else {
    document.getElementById('dia').textContent = `${dia}/${mes+1}/${ano}`;
}
window.addEventListener("resize", () => {
    if (window.innerWidth >= 500) {
        document.getElementById('dia').textContent = `Dia: ${dia} | Mês: ${meses[mes]} | Ano: ${ano}`;
    } else {
        document.getElementById('dia').textContent = `${dia}/${mes+1}/${ano}`;
    }
});
function horario() {
    let data_h = new Date()
    let hora_t = String(data_h.getHours()).padStart(2, '0')
    let minuto = String(data_h.getMinutes()).padStart(2, '0')
    let segundo = String(data_h.getSeconds()).padStart(2, '0')
    document.getElementById('hora').textContent = `Horário atual: ${hora_t}:${minuto}:${segundo}`
}
horario();
setInterval(horario, 1000);

function mudar_back() {
    let hora_n = data.getHours()
    if (hora_n >= 18){
        document.getElementById('periodo').textContent = 'Período atual: Noite'
    }
    if (hora_n < 6) {
        document.getElementById('periodo').textContent = 'Período atual: Madrugada'
    }
    if (6 <= hora_n && hora_n < 12) {
        document.getElementById('periodo').textContent = 'Período atual: Manhã'
    }
    if (12 <= hora_n && hora_n < 18) {
        document.getElementById('periodo').textContent = 'Período atual: Tarde'
    }
}
mudar_back();
setInterval(mudar_back, 9000)

function separar(elementos) {
    for (let el of elementos) {
        const chars = el.textContent.split("");

        el.innerHTML = chars
            .map(c => {
                if (c === " ") return " ";
                return `<span class="letras">${c}</span>`;
            })
            .join("");
    }
}
separar(textos);
function animarLetras() {
    const letras = Array.from(document.getElementsByClassName("letras"));
    letras.forEach((valor, i) => {
        setTimeout(() => {
            valor.classList.add("animado");
            if (letras[i - 6] !== undefined) {
                letras[i - 6].classList.remove("animado");
            }
            if (i === letras.length - 1) {
                for (let j = i - 5; j <= i; j++) {
                    setTimeout(() => {
                        letras[j].classList.remove("animado");
                    }, (j - (i - 5)) * 40);
                }
            }
        }, i * 40);
    });
}