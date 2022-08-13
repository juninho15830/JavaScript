function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date() 
    var hora = ("0" + data.getHours()).slice(-2)//("0" + .....()).slice(-2) Acrescenta o zero a esquerda do número e o delimita com duas casas ex: 1 se torna 01.
    var min = ("0" + data.getMinutes()).slice(-2)
    var diaSem = data.getDay()

    if (hora >= 0 && hora < 12) {
        img.src = './images/manha-250.png'
        document.body.style.background = '#e7d7b2'
    } else if (hora >= 12 && hora < 18) {
        img.src = './images/tarde-250.png'
        document.body.style.background = '#652c17'
    } else { 
        img.src = './images/noite-250.png'
        document.body.style.background = '#223947'
    } 

    switch(diaSem) { //Como o getDay() busca o dia da semana por número, é possivel aterar por strig com o dia correto desta forma.
        case 0:
            diaSem = ('Domingo')
            break
        case 1:
            diaSem = ('Segunda-Feira')
            break
        case 2:
            diaSem = ('Terça-Feira')
            break
        case 3:
            diaSem = ('Quarta-Feira')
            break
        case 4:
            diaSem = ('Quinta-Feira')
            break
        case 5:
            diaSem = ('Sexta-Feira')
            break
        case 6:
            diaSem = ('Sábado')
            break
        default:
            diaSem = ('[ERRO] Dia inválido')
        break 
    }
    msg.innerHTML = `Hoje é <strong>${diaSem}</strong> e agora são <strong>${hora} : ${min} horas!</strong>`
}