// 双端队列的一种实现，回文检查器。
import Deque from './6.Deque'

function palindromeChecker(aString: string) {
    if (aString.length === 0) return false

    // 转换成小写，且去除字符串中所有空格。
    const lowerString = aString.toLocaleLowerCase().split(' ').join('')

    const deque = new Deque()
    let isEqual = true
    let firstChar, lastChar

    lowerString.split('').forEach(item => deque.addBack(item))
    // 等价于
    // for (let i = 0; i < lowerString.length; i++) {
    //     deque.addBack(lowerString.charAt(i))
    // }

    // size为1返回，前后不匹配了直接返回false 
    while (deque.size() > 1) {
        firstChar = deque.removeFront()
        lastChar = deque.removeBack()
        if (firstChar !== lastChar) {
            return false
        }
    }

    return isEqual
}

console.log('a', palindromeChecker('a'))
console.log('aa', palindromeChecker('aa'))
console.log('kayak', palindromeChecker('kayak'))
console.log('level', palindromeChecker('level'))
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a car or a cat I saw'))
console.log('Step on no pets', palindromeChecker('Step on no pets'))