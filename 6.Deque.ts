// 双端队列,double-ended queue

type item = {
    [propsName: number]: any
}

class Deque {
    private items: item = {}
    private lowestCount = 0
    private count = 0

    addFront(element: any) {
        // 这么写会让index为负数，虽然也可以，但不好。
        // this.items[--this.lowestCount] = element

        if (this.isEmpty()) {
            this.addBack(element)
            return
        }
        if (this.lowestCount > 0) {
            this.items[--this.lowestCount] = element
            return
        }
        else {
            // lowestCount为0时，所有元素后移一个。
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1]
            }
            this.items[0] = element
            this.count++
            this.lowestCount = 0
        }
    }

    removeBack() {
        if (this.isEmpty()) return undefined
        const tail = this.items[--this.count]
        delete this.items[this.count]
        return tail
    }

    peekBack() {
        if (this.isEmpty()) return undefined
        return this.items[this.count - 1]
    }
    /*************************************queue的方法*********************************************8 */

    addBack(element: any) {
        this.items[this.count++] = element
    }

    peekFront() {
        if (this.isEmpty()) return undefined
        return this.items[this.lowestCount]
    }

    isEmpty() {
        return this.lowestCount === this.count
    }


    removeFront() {
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

export default Deque