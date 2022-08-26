let num = [5,8,2,9,3]
num.push(1)
num.sort()

console.log(`Nosso vetor é o ${num}`)

console.log(`O vetor tem ${num.length} posições.`)

console.log(`O primeiro elemento do vetor é ${num[0]}`)

/*
for(let pos=0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}Este comando mostra todos os valores e as respectivas chaves, mas o proximo faz o mesmo de maneira mais simples.
*/

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}//for(..... in .....) Este se torna mais simples.

let pos = num.indexOf(8)
    if(pos == -1) {
        console.log(`Elemento não encontrado`)
    } else {
        console.log(`A posição do elemento 8 está na posição ${pos}`)}