function parimp(n) {
    if(n % 2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

let res = parimp(12)
console.log(res) //É possivel fazer assim e salvar a função em um variável ou

console.log(parimp(1)) // Fazer assim também mostra na tela.