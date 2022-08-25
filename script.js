// Pedido de um cliente que montaremos conforme id dos itens
let pedido = {
  nomes: [],
  precoTotal: 0,
  pesos: {
    gramas: 0,
    mililitros: 0,
  },
};

// Função será responsável por atualizar a variável nomes
function definirNome(minhaListaDeProdutos) {
  for (let i = 0; i < minhaListaDeProdutos.length; i++) {
    pedido.nomes.push(minhaListaDeProdutos[i].nome);
  }
}

// Função será responsável por atualizar a variável precoTotal
function definirPrecoTotal(minhaListaDeProdutos) {
  for (let i = 0; i < minhaListaDeProdutos.length; i++) {
    pedido.precoTotal += minhaListaDeProdutos[i].preco;
  }
}

// Função será responsável por atualizar a variável pesos
function definirGramasEMililitros(produtos) {
  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].peso[produtos[i].peso.length - 1] == "l") {
      pedido.pesos.mililitros += parseInt(produtos[i].peso);
    } else {
      pedido.pesos.gramas += parseInt(produtos[i].peso);
    }
  }
}

// Função será responsavel por atualizar a variavel minhaListaDeProdutos
function encontrarItensPeloId(idList) {
  let arrObjetos = [];
  for (let i = 0; i < idList.length; i++) {
    arrObjetos.push(cardapio[idList[i]]);
  }
  return arrObjetos;
}

// Função será responsável pela apresentação do pedido. Obs: usar console.log() invés return na string criada.
function apresentacao() {
  console.log(pedido);
}

// Função principal da nossa aplicação, será responsável por chamar as funções.
function principal(idDosProdutosComprados) {
  // objetos que serão filtrados conforme o id dos itens. Obs: esse sera nosso array de objetos.
  const minhaListaDeProdutos = encontrarItensPeloId(idDosProdutosComprados);

  // atualizar nomes
  definirNome(minhaListaDeProdutos);

  // atualiar pesos
  definirGramasEMililitros(minhaListaDeProdutos);

  // atualizar precoTotal
  definirPrecoTotal(minhaListaDeProdutos);

  // apresentação do pedido
  apresentacao();
}

principal([1, 3, 7]);
