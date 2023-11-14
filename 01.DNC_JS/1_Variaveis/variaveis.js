
var A = 'Prisma'
var B = 'Corola'
//console.log(B)

let ingressos = ["Quinta", "Sexta", "Sábado"]

//let [ingresso1, ingresso2] = ingressos

//console.log(ingresso1)
//console.log(ingresso2)
console.log(ingressos)

let [ingresso1, ...rest] = ingressos

console.log(ingresso1)
console.log(rest)