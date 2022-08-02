// 对象实现

type items = {
    [propertiesName: number]: any
}

class Stack {
    #count = 0
    #items: items = {}
    constructor() {
        this.#count = 0
        this.#items = {}
    }

    push(element: any) {
        this.#items[this.#count] = element
        this.#count++
    }

    size() {
        return this.#count
    }

    isEmpty() {
        return this.#count === 0
    }

    pop() {
        if (this.isEmpty()) return undefined
        const result = this.#items[--this.#count]
        delete this.#items[this.#count]
        return result
    }

    peek() {
        // 防止越界
        if (this.isEmpty()) return undefined
        return this.#items[this.#count - 1]
    }

    clear() {
        this.#count = 0
        this.#items = {}
    }

    toString() {
        if (this.isEmpty()) return ''

        // 使得第一项前面没有逗号
        let result = `${this.#items[0]}`
        for (let i = 1; i < this.#count; i++) {
            result = `${result},${this.#items[i]}`
            // 等价于
            // result += `,${this.#items[i]}`
        }


        return result
    }
}

export default Stack