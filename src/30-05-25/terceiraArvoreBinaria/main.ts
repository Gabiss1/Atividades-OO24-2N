// Interface Base 
interface BstNodeInterface {
  value: number;
  name: string;
  left: BstNodeInterface | null;
  right:BstNodeInterface | null;
}

// Class Nó implementando a interface base
class BstNode implements BstNodeInterface {
  constructor(value: number, name: string) {
    this.left = null;
    this.right = null;
    this.value = value;
    this.name = name;
  }

  value: number;
  name: string;
  left: BstNodeInterface | null;
  right: BstNodeInterface | null;
}

// Classe da Árvore
class BST {
  root: BstNode | null; // Raíz da Árvore

  constructor() {
    this.root = null; // Constructor declarando o valor de raíz como nulo para não precisar passar nenhum valor ao criar a Árvore
  }

  // Função para inserir um Nó na Árvore recebe um valor em número e uma String Nome:
  // - Se a Árvore estiver vazia automaticamente o nó inserido se tornará a Raíz;
  // - Se já existir uma Raíz a função "insertNode" será chamada passando a Raíz e o novo Nó inserido como parâmetros.
  insert(value: number, name: string) {
    let newNode = new BstNode(value, name);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Método para inserir um Nó filho na Árvore:
  // - Verifica se o valor do novo Nó é menor que o da raíz e, se for menor e
  // a raíz não possuir um Nó filho na esquerda, a novo Nó será colocado como o nó filho na esquerda,
  // se já houver um Nó filho na esquerda o método "insertNode" será executada novamente passando esse Nó da esquerda e o novo Nó como parâmetro.
  // - Se o valor do novo Nó for maior que o da Raíz e não houver um Nó filho na direita o novo Nó será inserido na direta,
  // se já houver um Nó filho na direita o método "insertNode" será executada novamente passando esse Nó da direita e o novo Nó como parâmetro.

  insertNode(root: BstNode, newNode: BstNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
        return;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
        return;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  // Método de busca:
  // Se a raíz estiver vazia, ou seja se a árvore não tiver nada inserido nela, retorna que está vazia.
  // Se não, executa o método "searchNode" passando a Raíz e o valor inserido como parâmetro.
  search(value: number): boolean | string {
    if (!this.root) {
      return "Tree is empty";
    } else {
      return this.searchNode(this.root, value)
    }
  }

  // Método de Busca de Nó:
  searchNode(root: BstNode, value: number): boolean {
    if (!root) {
      return false;
    }

    if (value < root.value) {
      if (root.left === null) {
        return false;
      }
      return this.searchNode(root.left, value);
    } else if (value > root.value) {
      if (root.right === null) {
        return false;
      }
      return this.searchNode(root.right, value);
    }

    // value === root.value
    return true;
  }

  remove(value: number): void {
    if (!this.root) {
      return;
    } else {
      this.removeNode(this.root, value);
    }
  }
  
  removeNode(root: BstNode, value: number): null | BstNode {
    // If value is less than root value, go to the left subtree
    if (value < root.value && root.left !== null) {
      root.left = this.removeNode(root.left, value);
      return root;
      // If value is greater than root value, go to the right subtree
    } else if (value > root.value && root.right !== null) {
      root.right = this.removeNode(root.right, value);
      return root;
      // If we found the value, remove the node
    } else {
      // If no child nodes, just remove the node
      if (!root.left && !root.right) {
        return null;
      }
      // If one child (left)
      if (root.left) {
        root = root.left;
        return root;
        // If one child (right)
      } else if (root.right) {
        root = root.right;
        return root;
      }
      // If two child nodes (both)
      // Get the minimum of the right subtree to ensure we have valid replacement
      let minRight = this.findMinNode(root.right!);
      root.value = minRight.value;
      // Make sure we remove the node that we replaced the deleted node
      root.right = this.removeNode(root.right!, minRight.value);
      return root;
    }
  }
  
  findMinNode(root: BstNode): BstNode {
    if (!root.left) {
      return root
    } else {
      return this.findMinNode(root.left)
    }
  }
}

//　for checking result
const inputs: [string, number?, string?][] = [
  ["insert", 50, 'Mundial'],
  ["insert", 100, 'Champions League'],
  ["insert", 40, 'Libertadores'],
  ["insert", 70, 'Europa League'],
  ["insert", 60, 'La Liga'],
  ["insert", 30, 'Copa do Brasil'],
  ["insert", 25, 'Brasileirão'],
  ["find", 100],
  ["find", 120],
  ["find", 80],
  ["find", 90],
  ["find", 90],
  ["find", 6],
  ["find", 70],
  ["find", 800],
  ["print"],
  ["print"]
];
const bst = new BST();

inputs.forEach(input => {
  const type = input[0];
  const num  = input[1] as number;
  const name = input[2] as string;

  if (type === "insert") {
    bst.insert(num, name);
  } else if (type === "delete") {
    bst.remove(num);
  } else if (type === "find") {
    if (bst.search(num)) {
      console.log("yes");
    } else {
      console.log("no");
    }
  } else if (type === "print") {
    console.log("----------- in order -----------");
    inOrder(bst.root!, "-");

    console.log("----------- pre order -----------");
    preOrder(bst.root!, "-");
  }
});


function preOrder(root: BstNode, nivel: string): void {
  console.log(nivel+" "+root.name);
  if (root.left) {
    preOrder(root.left, nivel+"-");
  }
  if (root.right) {
    preOrder(root.right, nivel+"-");
  }
}

function inOrder(root: BstNode, nivel: string): void {
  if (root.left) {
    inOrder(root.left, nivel+"-");
  }
  console.log(nivel+" "+root.name);
  if (root.right) {
    inOrder(root.right, nivel+"-");
  }
}