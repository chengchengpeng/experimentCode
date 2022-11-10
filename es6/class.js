class A {
    constructor() {
        this.x = 2
        this.old = 12
    }
    static add() {
        this.x = 1
        console.log(this.old);
    }
}
A.prototype.old = 13
A.prototype.sum = function(){
    console.log(this.old);
}
class B extends A {
    nameText = '小红'
    static old = 16
    constructor() {
        super()
        this.old =15
        this.nameText = '小黑'
    }
    print() {
        // super.add()
        console.log(this.nameText);
        // console.log(super.x);
    }
    static handelName() {
        // console.log(this.old);
        // super.add()
    }
}
B.prototype.old = 14
let b = new B()
let a = new A()

b.print()
// console.log(b.nameText, B.nameText);
// console.log(A.prototype == a.__proto__);

// 总结
// es6使用extend关键字继承，子类必须在constructor中调用super方法（写在最前面）， 是因为子类的this对象需要父类的构造函数完成塑造，得到与父类同样的属性和方法，然后在对其加工， 加上自己的属性和方法
// super关键字可以作为函数或者对象来使用，作为函数在子类中调用（只能在构造函数中调用）， 代表的是父类的构造函数，但是其内部的this指向的是子类实例，作为对象来调用， 在普通方法中指向的是父类的原型对象，如果调用了方法， 方法中的this只的是子类的实例， 如果通过super赋值， 是给子类的实例赋值，在静态方法中指向父类， 如果调用方法， 其中this指向子类， 同理， 如果赋值， 将赋给子类，
// 类只能调用静态方法，和静态属性， 静态属性和静态方法也只能被类调用
// 关于继承，自身的属性会覆盖继承的属性