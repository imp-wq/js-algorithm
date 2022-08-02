// 栈的一种应用，十进制转二进制->进制转换
import Stack from './3.stack-obj'

function baseConvert(decNumber: number, base: number) {
    const stack = new Stack()
    // 增加对十六进制的支持
    const digits = '0123456789ABCDEF'

    let rem: number
    let number = decNumber

    // 错误判断，base需在2-36之间
    if (!(2 <= base && base <= 36)) {
        return ''
    }

    while (number > 0) {
        rem = Math.floor(number % base)
        number = Math.floor(number / base)
        stack.push(rem)
    }

    let binNumber = ''
    while (!stack.isEmpty()) {
        // binNumber += stack.pop().toString()
        binNumber += digits[stack.pop()]
    }

    return binNumber
}

console.log(baseConvert(100345, 16))