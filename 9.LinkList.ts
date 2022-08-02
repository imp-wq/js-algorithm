

type LinkListNode = {
    data: any
    next: LinkListNode | null
}
class LinkList {
    private count = 0
    private head: LinkListNode | null = null
    private equalsFn: Function
    constructor() {
        this.count = 0
        this.head = null
        this.equalsFn = function (a: LinkListNode, b: LinkListNode) {
            return a === b
        }
    }

    push(element: any) {
        this.count++
        const node: LinkListNode = {
            data: element,
            next: null
        }

        // 这里使用==，同时处理null和undefined。
        if (this.head == null) {
            this.head = node
            return
        }

        let current = this.head
        while (current.next != null) {
            current = current.next
        }

        current.next = node
    }

    remove(index: number) {
        // 越界判断。
        if (index < 0 || index > this.count) {
            console.error('越界')
            return undefined
        }

        let current = this.head

        // 需要对第一项进行特殊判断，因为第一项没有previous。
        if (index === 0) {
            this.head = current!.next
            this.count--
            return current!.data
        }

        // let previous
        // current拿到删除的元素
        // for (let i = 0; i < index; i++) {
        //     previous = current
        //     current = current!.next
        // }
        // 等价于
        const previous = this.getElementAt(index - 1)
        current = previous!.next;

        // 执行删除
        (<LinkListNode>previous).next = current!.next as LinkListNode
        (<LinkListNode>current).next = null

        this.count--
        return current!.data
    }

    getElementAt(index: number) {
        if (!(index >= 0 && index < this.count)) {
            console.error('索引越界')
            return undefined
        }

        let i = 0, current = this.head
        while (i < index) {
            i++
            current = current!.next
        }
        return current
    }

    insert(element: any, index: number) {
        if (index < 0 || index > this.count) {
            console.error('索引越界')
            return false
        }

        const node: LinkListNode = {
            data: element,
            next: null
        }

        let next
        if (index === 0) {
            next = this.head
            this.head = node
            node.next = next
        }
        else {
            const previous = this.getElementAt(index - 1)
            console.log(previous)
            next = previous!.next
            previous!.next = node
            node.next = next
        }

        this.count++
        return true
    }

    isEmpty() {
        return this.head == null
    }
    toString() {
        let current = this.head
        if (this.isEmpty()) return ''
        let linkListStr = `${this!.head!.data}`
        while (current!.next != null) {
            current = current!.next
            linkListStr += `,${current.data}`
        }
        return linkListStr
    }
}

export default LinkList