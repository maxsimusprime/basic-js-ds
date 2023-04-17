const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
	constructor() {
		this.rootNode = null;
	}

  root() {
    return this.rootNode;
  }

  add(data, current=this.rootNode) { 
		if (!current) {  // Если root вершина пустая(проверка сработает только на root)
			this.rootNode = new Node(data);
		} else {   // Если не пустая

			// если новое значение больше значения вершины - вправо
			if (data > current.data) {  
				if (!current.right) {   // если правой ветки нет то записывает туда новый узел
					current.right = new Node(data);
				} else {   // если правая ветка есть то рекурсивно погружаемся вниз
					this.add(data, current.right); 
				}
			// если новое значение равно текущему - возращаем undefined
			} else if (data === current.data) {
				return;
			// если новое значение меньше значения вершины - влево
			} else if (data < current.data) {
				if (!current.left) {   // если левой ветки нет то записывает туда новый узел
					current.left = new Node(data);
				} else {   // если левая ветка есть то рекурсивно погружаемся вниз слева
					this.add(data, current.left); 
				}
			}
		}
  }

  has(data, current=this.rootNode) {
		return this.find(data, current) ? true : false; // тут все ясно и так
  }

  find(data, current=this.rootNode) {
    // Если дерево пустое - false
		// проверка будет срабатывать постоянно, нужно вынести из цикла
		if (!current) return null;		
		// Обход дерева
		// let current = this.node;
		// Если data больше текущей, пожалуй поищем справа
		if (data > current.data) {
			// Если негде искать вернем false
			if (!current.right) {
				return null;
			// А если есть вернем результат поиска ниже
			} else {
				return this.find(data, current.right)
			}
		// Если data равна текущей, вернем true
		} else if (data === current.data) {
			return current;
		// Если data меньше текущей, пожалуй поищем слева
		} if (data < current.data) {
			// Если негде искать вернем false
			if (!current.left) {
				return null;
			// А если есть вернем результат поиска ниже
			} else {
				return this.find(data, current.left)
			}			
		}
  }

	remove(data){
		this.rootNode = removeData(this.rootNode, data);
		function removeData(current, data){
			if(!current) return null;

			// если искомое меньше или больше рекурсивно погружаемся
			// возвращаем текущие узлы без изменений
			if(data < current.data){ 
				current.left = removeData(current.left, data);
				return current;

			// Есть совпадение
			} else if(data == current.data){
					// если с одной стороны или с двух нет веток
					if(!current.left && !current.right) return null;
					if(!current.right) return current.left;
					if(!current.left)	return current.right;

					// Ветки с двух сторон есть
					let temp = current.right;   // максимальное правое
					while(temp.left !== null) // ищем минимальное в правом
							temp = temp.left;   
					// меняем на правое
					current.data = temp.data;
					current.right = removeData(current.right, temp.data);
					return current;
			//	если искомое больше
			}	else {
					current.right = removeData(current.right, data);
					return current;
			}
		}
	}

  min() {
    // Если дерево пустое - null
		if (!this.rootNode) return null;
		// ищем крайний левый передвигая current по веткам вниз влево
		let current = this.rootNode;
		while (current.left) {
			current = current.left;
		}
		return current.data;  // крайний левый лист найден!
  }

  max() {
    // Если дерево пустое - null
		if (!this.rootNode) return null;
		// ищем крайний правый передвигая current по веткам вниз вправо
		let current = this.rootNode;
		while (current.right) {
			current = current.right;
		}
		return current.data;  // крайний правый лист найден!
  }
}

module.exports = {
  BinarySearchTree
};