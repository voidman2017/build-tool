// import 'polyfill-array-includes';

const name = 'hello~'

const list = [1, 2, 3, 4];
list.forEach((item) => {
    console.log(item)
})

new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve()
    } else {
        reject()
    }
}).then(() => {
    console.log(1)
}).catch(() => {
    console.log(2)
})

function* g() {
    yield 'a';
    yield 'b';
    yield 'c';
    return 'ending';
}

var gen = g();
console.log(gen.next()); // 返回Object {value: "a", done: false}

for (let a of [1, 2, 3, 4]) {
    console.log(a); // 打印出 1, 2, 3, 4
}

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i)
    })
}

var list2 = [1, 2, 3, 4]
const [a, b, ...c] = list2
console.log(a, b, c)

const obj1 = { name: 1 }
const obj2 = { age: 24 }
// const obj = { ...obj1, ...obj2 }
// console.log(obj)

console.log([1, 2, 3].includes(2))


export default name;