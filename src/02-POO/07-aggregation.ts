export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadesProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((acum, produto) => (acum += produto.preco), 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const carrinho = new CarrinhoDeCompras();
const produto = new Produto('Camiseta', 49.9);

carrinho.inserirProdutos(produto);

console.log(carrinho);
console.log(carrinho.quantidadesProdutos());
console.log(carrinho.valorTotal());
