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
const sobre = document.getElementById("sobre");
const principal = document.getElementById("principal");
let podeClicar = true;

videoGameplay.addEventListener("play", () => {
    videoGameplay.volume = 0.55;
});

function abrirTollMouse() {
    if (!podeClicar) return;

    podeClicar = false;

    if (asideMouse.classList.contains("visivel")) {
        main.classList.remove("tool-aberto");
        asideMouse.classList.remove("visivel");
        setTimeout(() => {
            asideMouse.classList.remove("exibido");
        }, 500);
    } else {
        asideMouse.classList.add("exibido");
        setTimeout(() => {
            main.classList.add("tool-aberto");
            asideMouse.classList.add("visivel");
        }, 100);
    }
    setTimeout(() => {
        podeClicar = true;
    }, 750);
}
function fecharTollMouse() {
    main.classList.remove("tool-aberto");
    asideMouse.classList.remove("visivel");
    setTimeout(() => {
        asideMouse.classList.remove("exibido");
    }, 500);
}

opacidadeFundoSobre = document.getElementById("opacidadeFundo")
opacidadeFundoSobre.addEventListener("input", (valor) => {
    let fundo = document.getElementById("sobre")
    // Opacidade vem de um slider (valor contínuo) -> permanece inline
    fundo.style.opacity = valor.target.value
    fundo.classList.toggle("translucido", parseFloat(valor.target.value) <= 0.6)
})

document.getElementById("diaSem").textContent = diasSem[diaSem];

if (window.innerWidth >= 500) {
    document.getElementById('dia').textContent = `Dia: ${dia} | Mês: ${meses[mes]} | Ano: ${ano}`;
} else {
    document.getElementById('dia').textContent = `${dia}/${mes+1}/${ano}`;
}
window.addEventListener("resize", () => {
    if (window.innerWidth >= 536) {
        document.getElementById('dia').textContent = `Dia: ${dia} | Mês: ${meses[mes]} | Ano: ${ano}`;
    } else {
        document.getElementById('dia').textContent = `${dia}/${mes+1}/${ano}`;
    }
    periodo();
    horario();
    document.getElementById("diaSem").textContent = diasSem[diaSem];
});
function horario() {
    let data_h = new Date()
    let hora_t = String(data_h.getHours()).padStart(2, '0')
    let minuto = String(data_h.getMinutes()).padStart(2, '0')
    let segundo = String(data_h.getSeconds()).padStart(2, '0')
    if (window.innerWidth >= 536) {
        document.getElementById('hora').textContent = `Horário atual: ${hora_t}:${minuto}:${segundo}`
    } else {
        document.getElementById('hora').textContent = `${hora_t}:${minuto}:${segundo}`
    }
}
horario();
setInterval(horario, 1000);

function periodo() {
    let hora_n = data.getHours()
    if (window.innerWidth >= 536) {
        if (hora_n >= 18) {
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
    } else {
        if (hora_n >= 18) {
            document.getElementById('periodo').textContent = 'Noite'
        }
        if (hora_n < 6) {
            document.getElementById('periodo').textContent = 'Madrugada'
        }
        if (6 <= hora_n && hora_n < 12) {
            document.getElementById('periodo').textContent = 'Manhã'
        }
        if (12 <= hora_n && hora_n < 18) {
            document.getElementById('periodo').textContent = 'Tarde'
        }
    }
}
periodo();
setInterval(periodo, 5000)

function separar(elementos) {
    for (let el of elementos) {
        const letras = el.textContent.split("");

        el.innerHTML = letras.map(c => {
            if (c === " ") return " ";
            return `<span class="letras">${c}</span>`;
        }).join("");
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