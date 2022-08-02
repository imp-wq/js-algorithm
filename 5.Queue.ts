type item = {
    [propsName: number]: any
}

class Queue {
    // 指向下一个添加的元素位置
    private count = 0
    // 指向队列头
    private lowestCount = 0
    private items: item = {}

    enqueue(element: any) {
        this.items[this.count++] = element
    }

    peek() {
        if (this.isEmpty()) return undefined
        return this.items[this.lowestCount]
    }

    isEmpty() {
        return this.lowestCount === this.count
    }


    dequeue() {
        if (this.isEmpty()) return undefined
        const head = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return head
    }

    size() {
        return this.count - this.lowestCount
    }

    clear() {
        this.lowestCount = 0
        this.count = 0
        this.items = {}
    }

    toString() {
        if (this.isEmpty()) return ''
        let result = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            result += `,${this.items[i]}`
        }
        return result
    }
}

export default Queue