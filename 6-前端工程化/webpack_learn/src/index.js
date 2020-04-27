import $ from 'jquery'
import './css/1.css'
import './css/1.less'


$(function () {
    $('li:odd').css('backgroundColor', 'red')
    $('li:even').css('backgroundColor', 'lightblue')
})

class Person {
    static info = 'aaa'
}

console.log(Person.info);

// ---------------------------------------

import Vue from 'vue'
// 导入单文件组件
import App from './components/App.vue'

const vm = new Vue({
    // 指定vm实例要控制的页面区域
    el: '#app',
    // 通过render函数 把指定的组件渲染到el区域中
    // 在webpack中只支持用render函数
    render: h => h(App)
})