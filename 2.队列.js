
function Queue() {
    this.items = []
    // 1.添加
    Queue.prototype.enqueue = function (element) {
        this.items.push(element)
    }
    // 2.删除前端
    Queue.prototype.dequeue = function () {
        return this.items.shift()
    }
    // 3.查看前端
    Queue.prototype.front = function () {
        return this.items[0]
    }
    // 4.是否为空
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0
    }
    // 5.元素个数
    Queue.prototype.size = function () {
        return this.items.length
    }
    // 6.toString
    Queue.prototype.toString = function () {
        var resultString = ''
        for (let i = 0; i < this.items.length; i++) {
            resultString += this.items[i] + ' '
        }
        return resultString
    }
}

// 击鼓传花
function passGame(nameList, num) {
    var queue = new Queue()

    for (let i = 0; i < array.length; i++) {
        queue.enqueue(nameList[i])
    }

    while (queue.size > 1) {
        for (let i = 0; i < num - 1; i++) {
            queue.enqueue(queue.dequeue())
        }
        queue.dequeue()
    }
    var endName = queue.front()
    console.log('最终剩下' + endName);
    return nameList.indexOf(endName)
}


passGame(['a', 'b', 'c', 'd'], 2)