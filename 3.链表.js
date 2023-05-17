function LinkedList() {
    function Node(element) {
        this.element = element
        this.next = null
    }

    this.length = 0
    this.head = null

    LinkedList.prototype.append = function (data) {
        if (this.length === 0) {
            var newNode = new Node(data)
            this.head = newNode
        } else {
            var newNode = new Node(data)
            var current = this.head
            while (current) {
                current = current.next
            }
            current.next = newNode
        }
    }
    LinkedList.prototype.insert = function (position, data) {
        if (position < 0 || position > this.length) return 0
        var newNode = new Node(data)
        if (position === 0) {
            newNode.next = this.head
            this.head = newNode
        } else {
            var current = this.head
            var index = 0
            var previous = null
            while (index++ < position) {
                previous = current
                current = current.next
            }
            newNode.next = current
            previous.next = newNode
        }
    }
    LinkedList.prototype.get = function (position) {
        if (position < 0 || position >= this.length) return false
        var index = 0
        var current = this.head
        while (index++ < position) {
            current = current.next
        }
        return current.data
    }
    LinkedList.prototype.indexOf = function (data) {
        var current = this.head
        var index = 0
        while (current) {
            if (current.data == data) {
                return index
            }
            index++
            current = current.next
        }
        // 没找到
        return -1
    }
    LinkedList.prototype.update = function (position, data) {
        while (position < 0 || position >= this.length) return false
        var current = this.head
        var index = 0
        while (index++ < position) {
            current = current.next
        }
        current.data = data
        return true
    }
    LinkedList.prototype.removeAt = function (position) {
        while (position < 0 || position >= this.length) return false
        var index = 0
        var current = this.head
        if (position == 0) {
            this.head = this.head.next
        } else {
            while (index++ < position) {
                previous = current
                current = current.next
            }
            previout.next = current.next
        }
        this.length -= 1
        return current.data
    }
    LinkedList.prototype.remove = function (data) {
        var index = this.indexOf(data)
        return this.removeAt(index)
    }
    LinkedList.prototype.isEmpty = function (data) {
        return this.length == 0
    }
    LinkedList.prototype.toString = function () {
        var current = this.head
        var string = ''
        while (current) {
            string += current.data + ' '
            current = current.next
        }
        return string
    }
}

