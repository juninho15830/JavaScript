function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
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

    switch(diaSem) {
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
            diaSem =('Sexta-Feira')
            break
        case 6:
            diaSem =('Sábado')
            break
        default:
            diaSem =('[ERRO] Dia inválido')
        break 
    }
    msg.innerHTML = `Hoje é <strong>${diaSem}</strong> e agora são <strong>${hora} horas!</strong>`
}