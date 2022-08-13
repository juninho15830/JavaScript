function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0) {
        window.alert('Para continuar, preencha o campo "Ano de Nascimento"!')
    } else if (Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else if (Number(fano.value) <= -65000000) {
        window.alert('Você tem mais de 65 milhões de anos, só pode ser um dinossauro!')
    } else if (Number(fano.value) < 1800) {
        window.alert('Você é mais antigo que uma tartaruga!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './images/menino.png')
                genero = 'menino'
            } else if (idade < 21) {
                img.setAttribute('src', './images/rapaz.png')
                genero = 'rapaz'
            } else if (idade < 60) {
                img.setAttribute('src', './images/homem.png')
            } else if (idade < 123) {
                img.setAttribute('src', './images/idoso.png')
                genero = 'idoso'
            }else {
                img.setAttribute('src', './images/tartaruga.png')
                genero = 'tartaruga'
            }   
        } else {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './images/menina.png')
                genero = 'menina'
            } else if (idade < 21) {
                img.setAttribute('src', './images/moça.png')
                genero = 'moça'
            } else if (idade < 60) {
                img.setAttribute('src', './images/mulher.png')
            } else if (idade < 123) {
                img.setAttribute('src', './images/idosa.png')
                genero = 'idosa'
            }else {
                img.setAttribute('src', './images/tartaruga.png')
                genero = 'tartaruga'
            }   
        }      
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}