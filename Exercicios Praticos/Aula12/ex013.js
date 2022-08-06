var agora = new Date() //seleção por data
var hora = agora.getHours() //escolha da seleção new date em horas atuais
console.log (`Agora são ${hora} horas.`)
if (hora < 6) {
    console.log ('Boa Madrugada!')
} else if (hora < 12) {
    console.log ('Bom Dia!')
} else if (hora < 19){
    console.log ('Boa Tarde!')
} else {
    console.log ('Boa Noite!')
}