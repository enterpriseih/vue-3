function Foo () {
    getName = function () {
        alert(1)
    }
    return this
}

Foo.getName = function () {
    alert(2)
}
Foo.prototype.getName = function () {
    alert(3)
}
var getName = function () {
    alert(4)
}

function getName () {
    alert(5)
}

//请写出以下输出结果：
// 2
Foo.getName()
// 5
getName()
// 1
Foo().getName()
// 1
getName()
// 2
new Foo.getName()
new Foo().getName()
new new Foo().getName()
