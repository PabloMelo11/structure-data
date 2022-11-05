function Stack() {
  var items = [];

  this.push = function (element) {
    // adiciona um item na pilha
    items.push(element);
  };

  this.pop = function () {
    // remove o item do topo da pilha
    return items.pop();
  };

  this.peek = function () {
    // devolve o item que esta no topo da pilha
    return items[items.length - 1];
  };

  this.isEmpty = function () {
    // informar se a pilha esta vazia ou nao
    return items.length === 0;
  };

  this.clear = function () {
    // limpar a pilha
    items = [];
  };

  this.size = function () {
    // retornar o tamanho da pilha
    return items.length;
  };

  this.print = function () {
    // print da pilha
    console.log(items.toString());
  };
}
