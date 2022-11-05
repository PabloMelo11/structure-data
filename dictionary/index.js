function Dictionary() {
  var items = {};

  this.set = function (key, value) {
    // adiciona um novo item ao dicionario
    items[key] = value;
  };

  this.delete = function (key) {
    // remove o item do dicionario pela chave
    if (this.has(key)) {
      delete items[key];
      return true;
    }

    return false;
  };

  this.has = function (key) {
    // verifica se a chave existe e retorna um boolean
    return items.hasOwnProperty(key);
  };

  this.get = function (key) {
    // devolve um valor especifico pela chave
    return this.has(key) ? items[key] : undefined;
  };

  this.clear = function () {
    // remove todos os items do dicionario
    items = {};
  };

  this.size = function () {
    // retorna a quantidade de elementos contidos no dicionario
    return Object.keys(items).length;
  };

  this.keys = function () {
    // devolve um array com todos as chaves do dicionario
    return Object.keys(items);
  };

  this.values = function () {
    // devolve um array com todos os valores do dicionario
    var values = [];
    var keys = Object.keys(items);

    for (var i = 0; i < keys.length; i++) {
      values.push(items[keys[i]]);
    }

    return values;
  };

  this.getItems = function () {
    return items;
  };
}

const dictionary = new Dictionary();

dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'jhon@email.com');
dictionary.set('1', [1, 2, 3]);

console.log(dictionary.getItems());
