class Stack {
    #items: Array<any> = []
    constructor() {
        this.#items = []
    }
    push(element: any) {
        this.#items.push(element)
    }

    pop() {
        return this.#items.pop()
    }

    // 查看栈顶元素
    peek() {
        return this.#items[this.#items.length - 1]
    }

    isEmpty() {
        return this.#items.length === 0
    }

    size() {
        return this.#items.length
    }

    clear() {
        this.#items = []
    }

    toString() {
        return this.#items.toString()
    }
}

export default Stack