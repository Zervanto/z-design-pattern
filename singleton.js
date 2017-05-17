/*
* @Author: Zervanto
* @Date:   2017-05-17 13:25:52
* @Last Modified by:   Zervanto
* @Last Modified time: 2017-05-17 16:09:24
*/
let __instance = (function () {
  let instance;
  return (newInstance) => {
    if (newInstance) instance = newInstance;
    return instance;
  }
}());

class Singleton {
  constructor() {
    if (__instance()) return __instance();
    //按自己需求实例化
    this.foo = 'bar';
    __instance(this);
  }
}

let u1 = new Singleton();
let u2 = new Singleton();

console.log(u1.foo); //'bar'
console.log(u1 === u2); //true
