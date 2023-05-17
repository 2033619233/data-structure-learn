

function Stack() {
    this.items = []
    //压栈
    Stack.prototype.push = function (element) {
        this.items.push(element)
    }
    //取出值
    Stack.prototype.pop = function () {
        return this.items.pop()
    }

    //查看栈顶元素
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1]
    }

    //是否为空
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0
    }

    //数量
    Stack.prototype.size = function (element) {
        return this.items.length
    }
    //tosString
    Stack.prototype.toString = function (element) {
        var resultString = ''
        for (let i = 0; i < this.items.length; i++) {
            resultString += this.items[i] + ' '
        }
        return resultString
    }
}

var s = new Stack()

s.push(20)


// 实践
// 十进制转二进制

function dec2bin (decNumber) {
    var stack = new Stack()
    while (decNumber>0){
        stack.push(decNumber%2)
        decNumber = Math.floor(decNumber/2)
    }
    var binaryString = ''
    while(!stack.isEmpty()){
        binaryString += stack.pop()
    }
    return binaryString
}