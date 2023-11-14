
function formatarMoeda(input) {
    // Obtém o valor do input e remove caracteres não numéricos
    let valor = input.value.replace(/\D/g, '');

    // Formata o valor como moeda
    valor = (parseFloat(valor) / 100).toFixed(2);

    // Adiciona o símbolo de moeda (R$) ao valor
    valor = "R$ " + valor;

    // Define o valor formatado de volta no input
    input.value = valor;
}


class Produto {
    constructor () {
        this.id = 1;
        this.arrayProdutos = [];
    }

    Adicionar () {
        let produto = this.LerDados();
        console.log(produto);
        if (this.Validar(produto)) {
            this.Salvar(produto);
            this.Listar();
        }
    }

    LerDados(){
        let produto = {}
        produto.id = this.id;
        produto.nomeProduto = document.getElementById('pdnome').value;
        produto.precoProduto = document.getElementById('pdpreco').value;
        return produto;
    }

    Validar(produto) {
        let msg = '';

        if (produto.nomeProduto == '') {
            msg += 'Por favor, insira corretamente o nome do produto!\n';
        } 
        if (produto.precoProduto == '') {
            msg += 'Por favor, insira corretamente o preço do produto!\n';
        }
        if (msg != '') {
            alert(msg);
            return false;
        }
        return true;
    }

    Salvar(produto) {
        this.arrayProdutos.push(produto);
        this.id++;
    }

    Cancelar (){
        document.getElementById('pdnome').value = ''
        document.getElementById('pdpreco').value = ''
    }

    Listar() {
        let tbody = document.querySelector('.tbody');
        
        // Criar uma nova linha
        let newRow = tbody.insertRow();
        
        // Adicionar células à nova linha
        let td_id = newRow.insertCell();
        let td_nome = newRow.insertCell();
        let td_preco = newRow.insertCell();
        let td_del = newRow.insertCell();
        
        // Adicionar a classe "nova-linha" às células da nova linha
        td_id.classList.add("nova-linha");
        td_nome.classList.add("nova-linha");
        td_preco.classList.add("nova-linha");
        td_del.classList.add("nova-linha");
        
        // Definir o conteúdo das células (se necessário)
        td_id.innerText = this.arrayProdutos[this.arrayProdutos.length - 1].id;
        td_nome.innerText = this.arrayProdutos[this.arrayProdutos.length - 1].nomeProduto;
        td_preco.innerText = this.arrayProdutos[this.arrayProdutos.length - 1].precoProduto;
        
        // Criar um elemento de imagem (ícone de delete)
        let deleteIcon = document.createElement('img');
        deleteIcon.src = 'img/del.svg'; // Substitua pelo caminho da sua imagem
        deleteIcon.alt = 'Excluir';
        
        // Adicionar um evento de clique à imagem para chamar a função Deletar()
        deleteIcon.addEventListener('click', () => {
            this.Deletar(this.arrayProdutos[this.arrayProdutos.length - 1].id);
        });
        deleteIcon.style.cursor = 'pointer';
        
        // Adicionar a imagem à célula td_del
        td_del.appendChild(deleteIcon);
    }
    
    Deletar(id) {
        let tbody = document.querySelector('.tbody');
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if (this.arrayProdutos[i].id === id) {
                this.arrayProdutos.splice(i, 1);
                tbody.deleteRow(i);
                break; // Importante: saia do loop após excluir o item
            }
        }
    }
    
}

var produto = new Produto();
