import Queue from "./5.Queue"

// 淘汰第num个人
function hotPotato(list: Array<any>, num: number) {
    const queue = new Queue()

    list.forEach(item => queue.enqueue(item))

    let count = 0
    const eliminatedList = []
    while (queue.size() > 1) {
        count++
        const tail = queue.dequeue()
        queue.enqueue(tail)
        if (count === num) {
            eliminatedList.push(queue.dequeue())
            count = 0
        }
    }

    return {
        eliminated: eliminatedList,
        winner: queue.peek()
    }
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
const result = hotPotato(names, 7)
console.log(result)