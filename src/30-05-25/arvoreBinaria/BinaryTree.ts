export type Node = {
    name: string
    value: number,
    children: (Node | null)[]
}

export interface InputNode extends Omit<Node, 'children'> {
}

export default class BinaryTree {
    #root!: Node
    #height!: number

    constructor(root: InputNode) {

        this.#root = { ...root, children: [null, null] }
        this.#height = 0
    }

    append(node: InputNode | null): void {

        if (node) {
            let parent = this.#root
            let height = 0;

            for (let i = 0; i <= height; i++) {

                let tmp = { ...node, children: [null, null] }

                if (parent.value > node.value) {
                    if (parent.children[0] == null) parent.children[0] = tmp
                    else {
                        parent = parent.children[0]
                        height++
                        continue;
                    }
                } else if (parent.value < node.value) {
                    if (parent.children[1] == null) parent.children[1] = tmp
                    else {
                        parent = parent.children[1]
                        height++
                        continue;
                    }
                } else {
                    parent = {
                        ...tmp, children: parent.children
                    }

                }

            }

            this.#height = height
        }
    }

    getByValue(value: number): Node | null {

        let node: Node | null = null
        let parent = this.#root
        for (let i = 0; i <= this.#height; i++) {
            if (value < parent.value) {
                parent = parent.children[0] as Node
            } else if (value > parent.value) {
                parent = parent.children[1] as Node
            }
            else {
                node = parent
                break
            }
        }

        return node
    }

    get height() { return this.#height }

    getAll(root: Node = this.#root): Node[] {
        if (root != null)
            return [root, ...this.getAll(root.children[0] as Node), ...this.getAll(root.children[1] as Node)]

        return []
    }
}