let test:boolean = true
let nums:number = 1
let numArr: number[] = [1,2,3]
let numArr1:Array<number> = [1,2,3]
let user:[number, string, string] = [1,'1', '1']
user.push(1) //不可以push定义外的元素
function add (a:number, b:string):number{
  return +b +  a
}
add(1,'1')

let add1 = (a:number, b:number):number => {
  return a+b
}

let add2:(a:number,b:number, c?:number)=> number = add1
let add3 = add1


// 接口可以定义对象的类型,
interface Persion{
  name:string
  readonly id:number
  age?: number
} 
let xw:Persion = {
  name:'11',
  id:1,
  age:2
}
// 接口也可以定义函数的类型
interface isNum {
  (a:number, b:number, c?:string):number
}
let func1:isNum = function (a:number, b:number):number{
  return a+b
}
let func2:isNum = (a:number, b:number):number =>{
  return a+b
} 

interface randommap {
  [propName:string]:string
}
let value1: randommap = {
  a:'1',
  b:'2'
}
// 接口也叫鸭子类型
interface likeArray{
  [index:number]:string
}
let value2:likeArray = ['1','2']
value2 = [',3', '5','3']

// 四不像类型
interface functionType{
  (a:number):number
  name:string
}
let func3:functionType = (a:number)=>{
  return a
} 
func3.name = '1'

// ts对类的增强
    // private 私有属性只能在类的内部使用
    // public 共有属性，等于没有设置权限
    // protected  只能在当前类和继承该类的子类中使用

    // 接口也可以声明类的约束
interface ClockInterface {
    currentiem:string
    alert():void
}
interface StaticClockInterface {
    new (a:number, b:number):void
    key:string
}
class Clock implements ClockInterface {
    currentiem = '10:10'
    alert(){

    }
}
class cellPhone implements ClockInterface {
    currentiem = '10:10'
    alert(){

    }
}
// 要想通过接口约束构造函数， 需要一些特殊处理， 需要一个新的接口定义，
// 另一方面， 构造函数默认为静态类型
// StaticClockInterface该接口下面的写法其实就是约束了类内部的静态类型
const Game:StaticClockInterface = class Game implements ClockInterface{
    constructor(a:number, b:number) {
    }
    static key = '11'
    currentiem = '10:10'
    alert(){

    }
}
// type 类型声明
type funType = (a:number, b:number) => string
const fun:funType = (a:number,b:number)=>{
    return '1'
}

// 联合类型,只能访问联合类型共有的方法属性
let linkKey:number | string

// 类型断言开发者比编译器更清楚此时变量的类型