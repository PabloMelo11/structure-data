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

var linked = new LinkedList();
linked.append('Pablo');
linked.append('Nica');
linked.append('Gui');
