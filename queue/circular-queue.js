function Queue() {
  var items = [];

  this.enqueue = function (element) {
    // adiciona um novo item
    items.push(element);
  };

  this.dequeue = function () {
    // remove um item da fila
    return items.shift();
  };

  this.front = function () {
    // retorna o primeiro elemento da fila
    return items[0];
  };

  this.isEmpty = function () {
    // verifica se a fila esta vazia
    return items.length === 0;
  };

  this.size = function () {
    // retorna o tamanho da fila
    return items.length;
  };
}

function hotPotato(nameList, num) {
  var queue = new Queue();

  for (var i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  var eliminated = '';

  while (queue.size() > 1) {
    for (var i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }

    eliminated = queue.dequeue();
    console.log(eliminated + ' was eliminated from hot potato game');
  }

  return queue.dequeue();
}

var names = ['Pablo', 'Nicolly', 'Guilherme'];

var winner = hotPotato(names, 10);

console.log('The winner is ' + winner);
