const data = new Date()
var enviar = document.getElementById("enviar")
var diaSem = data.getDay()
const diasSem = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
var dia = data.getDate()
var mes = data.getMonth()
var ano = data.getFullYear()
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
var cor_back = document.body
var textos = document.getElementsByClassName("textos");

function abrirToll(toll, aside) {
    var principal = document.getElementById("principal")
    if (toll.style.visibility === "visible") {
        toll.style.visibility = "hidden"
        toll.style.opacity = "0"
        toll.style.transition = "0.5s"
        aside.style.flex = "1"
        aside.style.width = "50px"
        principal.style.flex = "29"
        principal.style.transition = "0.5s"
    } else {
        toll.style.visibility = "visible"
        toll.style.opacity = "1"
        toll.style.transition = "0.5s"
        aside.style.flex = "2"
        aside.style.width = "100%"
        principal.style.flex = "3"
        principal.style.transition = "0.5s"
    }
}
function fecharToll(toll, aside) {
    var principal = document.getElementById("principal")
    toll.style.visibility = "hidden"
    toll.style.opacity = "0"
    toll.style.transition = "0.5s"
    aside.style.flex = "1"
    aside.style.width = "50px"
    principal.style.flex = "29"
    principal.style.transition = "0.5s"
}
function alterarFundo(valor) {
    var fundo = document.getElementById("sobre")
    fundo.style.opacity = valor
    if (fundo.style.opacity <= 0.6) {
        fundo.style.pointerEvents = "none"
        fundo.style.userSelect = "none"
    } else {
        fundo.style.pointerEvents = "auto"
        fundo.style.userSelect = "auto"
    }
}

if (enviar != null) {
    enviar.addEventListener('click', mostrar)
}

function mostrar() {
    var nome = document.getElementById("email").value
    if (nome != null) {
        var errado = 0
        if (nome.includes("@gmail.com") || nome.includes("@outlook.com") || nome.includes("@hotmail.com")) {
            if (nome[0] != "@") {
                errado = 1
            } else {
                errado = 0
            }
        }
        if (nome.includes(' ')) {
            errado = 0
        }
        if (errado == 1) {
            if (nome.substring(0, nome.indexOf("@")).includes(".")) {
                var nomeText = nome.substring(0, nome.indexOf("."))
            } else if (nome.includes("_")) {
                var nomeText = nome.substring(0, nome.indexOf("_"))
            } else {
                var nomeText = nome.substring(0, nome.indexOf("@"))
            }
            document.getElementById("resposta").textContent = `Olá ${nomeText}! Seja bem-vindo(a)!`
        } else {
            document.getElementById("resposta").textContent = 'Por favor, coloque o complemento do arroba correto e não coloque espaço no e-mail (Observação: use seu e-mail pessoal)'
        }
    }
}

document.getElementById("diaSem").textContent = diasSem[diaSem]
document.getElementById('dia').textContent = `Dia: ${dia} | Mês: ${meses[mes]} | Ano: ${ano}`

function horario() {
    var data_h = new Date()
    var hora_t = String(data_h.getHours()).padStart(2, '0')
    var minuto = String(data_h.getMinutes()).padStart(2, '0')
    var segundo = String(data_h.getSeconds()).padStart(2, '0')
    document.getElementById('hora').textContent = `Horário atual: ${hora_t}:${minuto}:${segundo}`
}

horario();
setInterval(horario, 1000);

function mudar_back() {
    var hora_n = data.getHours()
    if (hora_n >= 18){
        // cor_back.style.backgroundColor = 'rgb(20, 18, 18)'
        document.getElementById('periodo').textContent = 'Período atual: Noite'
    }
    if (hora_n < 6) {
        // cor_back.style.backgroundColor = 'rgb(20, 18, 18)'
        document.getElementById('periodo').textContent = 'Período atual: Madrugada'
    }
    if (6 <= hora_n && hora_n < 12) {
        // cor_back.style.backgroundColor = 'rgba(228, 216, 56, 0.53)'
        document.getElementById('periodo').textContent = 'Período atual: Manhã'
    }
    if (12 <= hora_n && hora_n < 18) {
        // cor_back.style.backgroundColor = 'rgb(253, 174, 17)'
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
separar(textos)

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