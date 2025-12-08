const data = new Date()

var enviar = document.getElementById("enviar")
if (enviar != null) {
    enviar.addEventListener('click', mostrar)
    // enviar.addEventListener('mouseenter', entrar)
    // enviar.addEventListener('mouseout', saiu)
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

var diaSem = data.getDay()
switch(diaSem) {
    case 0:
        document.getElementById("diaSem").textContent = "Domingo"
        break
    case 1:
        document.getElementById("diaSem").textContent = "Segunda-feira"
        break
    case 2:
        document.getElementById("diaSem").textContent = "Terça-feira"
        break
    case 3:
        document.getElementById("diaSem").textContent = "Quarta-feira"
        break
    case 4:
        document.getElementById("diaSem").textContent = "Quinta-feira"
        break
    case 5:
        document.getElementById("diaSem").textContent = "Sexta-feira"
        break
    case 6:
        document.getElementById("diaSem").textContent = "Sábado"
        break
}

var dia = data.getDate()
var mes = data.getMonth()
var ano = data.getFullYear()
switch(mes) {
    case 0:
        document.getElementById('dia').textContent = `Dia: ${dia} | Mês: Janeiro | Ano: ${ano}`
        break
    case 1:
        document.getElementById('dia').textContent = `Dia: ${dia} | Mês: Fevereiro | Ano: ${ano}`
        break
    case 2:
        document.getElementById('dia').textContent = `Dia: ${dia} | Mês: Março | Ano: ${ano}`
        break
    case 3:
        document.getElementById('dia').textContent = `Dia: ${dia} | Mês: Abril | Ano: ${ano}`
        break
    case 4:
        document.getElementById('dia').textContent = `Dia: ${dia} | Mês: Maio | Ano: ${ano}`
        break
    case 5:
        document.getElementById('dia').textContent = `Dia: ${dia} | Mês: Junho | Ano: ${ano}`
        break
    case 6:
        document.getElementById('dia').textContent = `Dia: ${dia} | Mês: Julho | Ano: ${ano}`
        break
    case 7:
        document.getElementById('dia').textContent = `Dia: ${dia} | Mês: Agosto | Ano: ${ano}`
        break
    case 8:
        document.getElementById('dia').textContent = `Dia: ${dia} | Mês: Setembro | Ano: ${ano}`
        break
    case 9:
        document.getElementById('dia').textContent = `Dia: ${dia} | Mês: Outubro | Ano: ${ano}`
        break
    case 10:
        document.getElementById('dia').textContent = `Dia: ${dia} | Mês: Novembro | Ano: ${ano}`
        break
    case 11:
        document.getElementById('dia').textContent = `Dia: ${dia} | Mês: Dezembro | Ano: ${ano}`
        break
}

function horario() {
    var data_h = new Date()
    var hora_t = String(data_h.getHours()).padStart(2, '0')
    var minuto = String(data_h.getMinutes()).padStart(2, '0')
    var segundo = String(data_h.getSeconds()).padStart(2, '0')
    document.getElementById('hora').textContent = `Horário atual: ${hora_t}:${minuto}:${segundo}`
}

horario();
setInterval(horario, 1000);

var cor_back = document.body
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

var textos = document.getElementsByClassName("textos");
function separar(elemento) {
    for (let i=0; i < textos.length; i++) {
        var chars = Array.from(elemento.textContent)
        elemento.textContent = ""
        chars.forEach(char => {
            var span = document.createElement("span");
            span.classList.add("letras");
            span.textContent = char;
            elemento.appendChild(span);
        });
    }
}
separar(textos)
var letras = document.getElementsByClassName("letras")
document.addEventListener("mouseenter", letras => {
    for (let i=0; i < letras.length; i++) {
        letras[i].style.marginBottom = "7px"
        letras[i].style.transition = "0.5s"
    }
})