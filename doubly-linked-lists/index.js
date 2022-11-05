function DoublyLinkedList() {
  var Node = function (element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  };

  var length = 0;
  var head = null;
  var tail = nill;

  this.append = function (element) {
    // adiciona um elemento no final da lista
    var node = new Node(element);
    var current;

    if (head === null) {
      head = node;
      tail = node;
    } else {
      current = head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
      tail = node;
    }

    length++;
  };

  this.insert = function (position, element) {
    // adiciona um element em uma posição especifica
    if (position >= 0 && position <= length) {
      var node = new Node(element);

      var current = head;
      var previous;
      var index = 0;

      if (position === 0) {
        if (!head) {
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node;
          head = node;
        }
      } else if (position === length) {
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }
      length++;
      return true;
    }
    return false;
  };

  this.removeAt = function (position) {
    // remove o elemento de uma posição especifica
    if (position > -1 && position < length) {
      var current = head;
      var previous = undefined;
      var index = 0;

      if (position === 0) {
        head = current.next;

        if (length === 1) {
          tail = null;
        } else {
          head.prev = null;
        }
      } else if (position === length - 1) {
        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
        current.next.prev = previous;
      }
      length--;
      return current.element;
    } else {
      return null;
    }
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
