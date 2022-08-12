function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) < 1900) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade > 0 && idade < 10) {
                img.setAttribute('src', './images/menino.png')
            } else if (idade < 21) {
                img.setAttribute('src', './images/rapaz.png')
            } else if (idade < 50) {
                img.setAttribute('src', './images/homem.png')
            } else {
                img.setAttribute('src', './images/idoso.png')
            }   
        } else {
            genero = 'Mulher'
            if (idade > 0 && idade < 10) {
                img.setAttribute('src', './images/menina.png')
            } else if (idade < 21) {
                img.setAttribute('src', './images/moça.png')
            } else if (idade < 50) {
                img.setAttribute('src', './images/mulher.png')
            } else {
                img.setAttribute('src', './images/idosa.png')
            }   
        }      
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamo ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}