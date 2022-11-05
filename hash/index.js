function LinkedList() {
  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  var length = 0;
  var head = null;

  this.append = function (element) {
    // adiciona um elemento no final da lista
    var node = new Node(element);
    var current;

    if (head === null) {
      head = node;
    } else {
      current = head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    length++;
  };

  this.insert = function (position, element) {
    // adiciona um element em uma posição especifica
    if (position >= 0 && position <= length) {
      var node = new Node(element);
      var current = head;
      var previous;
      index = 0;

      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      length++;
      return true;
    } else {
      return false;
    }
  };

  this.removeAt = function (position) {
    // remove o elemento de uma posição especifica
    if (position > -1 && position < length) {
      var current = head;
      var previous;
      var index = 0;

      if (position === 0) {
        head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
      }
      length--;
      return current.element;
    }

    return null;
  };

  this.remove = function (element) {
    // remove o elemento pelo element
    var index = this.indexOf(element);
    return this.removeAt(index);
  };

  this.indexOf = function (element) {
    // retorna a posição do elemento
    var current = head;
    var index = 0;
    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  };

  this.isEmpty = function () {
    // retorna se esta vazia ou nao a instancia
    return length === 0;
  };

  this.size = function () {
    // retorna o tamanho da instancia
    return length;
  };

  this.toString = function () {
    // exibe os elementos em string
    var current = head;
    var string = '';

    while (current) {
      string += current.element + ' ';
      current = current.next;
    }

    return string;
  };

  this.getHead = function () {
    // retorna o head
    return head;
  };

  this.print = function () {
    console.log(this.toString());
  };
}

function HashTable() {
  var table = [];

  var ValuePair = function (key, value) {
    this.key = key;
    this.value = value;
    this.toString = function () {
      return '[' + this.key + ' - ' + this.value + ']';
    };
  };

  var hashCode = function (key) {
    // retorna hash (valor numérico)
    var hash = 0;

    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % 37;
  };

  // old implementation
  // this.put = function (key, value) {
  //   // insere elemento
  //   var position = hashCode(key);
  //   table[position] = value;
  // };

  this.put = function (key, value) {
    // insere elemento (resolvendo colisão)
    var position = hashCode(key);

    if (table[position] === undefined) {
      table[position] = new LinkedList();
    }

    table[position].append(new ValuePair(key, value));
  };

  // old implementation
  // this.remove = function (key) {
  //   // remove elemento
  //   table[hashCode(key)] = undefined;
  // };

  this.remove = function (key) {
    // remove elemento (resolvendo colisão)
    var position = hashCode(key);

    if (table[position] !== undefined) {
      var current = table[position].getHead();

      while (current.next) {
        if (current.element.key === key) {
          table[position].remove(current.element);

          if (table[position].isEmpty()) {
            table[position] = undefined;
          }

          return true;
        }
        current = current.next;
      }

      if (current.element.key === key) {
        table[position].remove(current.element);

        if (table[position].isEmpty()) {
          table[position] = undefined;
        }

        return true;
      }
    }
    return false;
  };

  // old implementation
  // this.get = function (key) {
  //   // retorna um valor
  //   return table[hashCode(key)];
  // };

  this.get = function (key) {
    // retorna um valor (resolvendo colisão)
    var position = hashCode(key);

    if (table[position] !== undefined) {
      var current = table[position].getHead();

      while (current.next) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }

      if (current.element.key === key) {
        return current.element.value;
      }
    }

    return undefined;
  };

  this.getTable = function () {
    return table;
  };

  this.print = function () {
    for (var i = 0; i < table.length; i++) {
      if (table[i] !== undefined) {
        console.log(i + ' : ' + table[i]);
      }
    }
  };
}

const hash = new HashTable();

hash.put('Gandalf', 'Gandalf');
hash.put('John', 'John');
hash.put('Tyrion', 'Tyrion');
hash.put('Aaron', 'Aaron');
hash.put('Donnie', 'Donnie');
hash.put('Ana', 'Ana');
hash.put('Jonathan', 'Jonathan');
hash.put('Jamie', 'Jamie');
hash.put('Sue', 'Sue');
hash.put('Mindy', 'Mindy');
hash.put('Paul', 'Paul');
hash.put('Nathan', 'Nathan');

hash.print();
