import Stack from './3.stack-obj'
import Queue from './5.Queue'
import Deque from './6.Deque'
import LinkList from './9.LinkList'

// 数组实现
const stack = new Stack()

console.log(stack.isEmpty())
stack.push(5)
stack.push(8)
stack.push(10)

console.log(stack.peek())
console.log(stack.size())

console.log(stack.toString())

console.log('-------------Queue-----------')
const queue = new Queue()
console.log(queue.isEmpty())

queue.enqueue('John')
queue.enqueue('Jack')
console.log(queue.toString())
queue.enqueue('Camila')
console.log(queue.toString()) // John, Jack, Camila 
console.log(queue.size()) // 输出 3 
console.log(queue.isEmpty()) // 输出 false 
queue.dequeue() // 移除 John 
queue.dequeue() // 移除 Jack 
console.log(queue.toString()) // Camila 

console.log('-------------Deque-----------')

const deque = new Deque()
console.log(deque.isEmpty()) // 输出 true 
deque.addBack('John')
deque.addBack('Jack')
console.log(deque.toString()) // John, Jack 
deque.addBack('Camila')
console.log(deque.toString()) // John, Jack, Camila 
console.log(deque.size()) // 输出 3 
console.log(deque.isEmpty()) // 输出 false 
deque.removeFront() // 移除 John 
console.log(deque.toString()) // Jack, Camila 
deque.removeBack() // Camila 决定离开
console.log(deque.toString()) // Jack 
deque.addFront('John') // John 回来询问一些信息
console.log(deque.toString()) // John, Jack

console.log('-------------LinkList-----------')
const linkList = new LinkList()
linkList.push(15)
linkList.push(10)
linkList.push(15)
console.log(linkList.toString())


console.log(linkList.getElementAt(1))
linkList.remove(0)
linkList.insert(40, 0)
console.log(linkList.toString())