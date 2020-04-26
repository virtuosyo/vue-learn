// 默认导入
import m1 from './m1'

// 按需导入
import {
    s1,
    s2 as ss2
} from './m1'

// 直接导入模块代码
import './m2'


console.log(s1);
console.log(ss2);
console.log(m1.a);