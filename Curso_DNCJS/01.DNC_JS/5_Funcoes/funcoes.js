/* função que determine se é possível comprar presentes em determinadas situações.*/

function presente (dinheiro, valor) {

    if(dinheiro < valor) {
    return 'Não vai dar para comprar...'}
    
    else{
        return 'Você realmente precisa fazer essa compra?'
    }

}

let x = presente (90, 50)

console.log(x)
