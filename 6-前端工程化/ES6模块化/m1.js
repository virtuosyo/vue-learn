let a = 10
let c = 20
let d = 30

function show() {
    console.log('hello');

}


// 按需导出
export let s1 = 'aaa'
export let s2 = 'ccc'
export function say() {
    console.log('112233');

}

// 默认导出
export default {
    a,
    c,
    show
}