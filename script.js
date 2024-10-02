class Produto {

    constructor(){
        this.id = 1;
        this.arrayProdutos = [];

    }

    salvar(){
        
      let produto = this.lerDados();
    
      this.adicionar(produto);

      this.listarTabela();
    }

    adicionar(produto) {
        this.arrayProdutos.push(produto);
        this.id++;
    }

    lerDados() {
        let produto ={ }

        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;

        produto.valorProduto = document.getElementById('valor').value;

        return produto;
    }
    
    listarTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText ='';

        for(let i =0; i <this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();

            
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].valorProduto;
        }
    }
}


var produto = new Produto();

