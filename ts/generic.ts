
// 泛型出现的原因
    // 1类型推断没办法流到函数里面去， 没办法获得准确的类型


function add<T,V>(key:T, value:V):[V, T]{
    return [value, key]
}

const res = add(1, 'srt')

interface userResp{
    name:string
    old:number
}
function withApi<T>(url:string): Promise<T>{
    return fetch(url).then(res=>{
       return res.json()
    })
}
withApi<userResp>('123').then((res)=>{
    res
})
interface MyPerson{
    name:string
    old:number
}

// 联合类型
type withfunProp<P>  = P & {child:string}

interface funcType<P={}> {
    (prop:withfunProp<P>): any
}


const myfun1:funcType<MyPerson> = (props)=>{
    props.name
}


type MyPersonOption = Partial<MyPerson>

const person:MyPersonOption = {
    name:'1',
    old:2
}


type keys = keyof userResp
// 字面量
let value3:keys = 'name'

type typeName = userResp['name']

type Test = {
    [key in keys]:any
}
type newUserResp = {
    [key in keys]?:userResp[key]
}


// 约束类型 extends
interface IWithLength {
    length:number
}
function echoWithArr<T extends IWithLength>(args:T):T{
    // 表示T必须满足后面的条件
    console.log(args.length);
    return args
}
let arr = echoWithArr([1,2,4])
let str = echoWithArr('1,2,3')
let obj = echoWithArr({length:10})

// 泛型条件判断
// 也可以用在条件判断中
type NonType<T> = T extends undefined | null ? never : T

let demo:NonType<undefined>
let demo1:NonType<number>

Jquery('#id')