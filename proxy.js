/*
* @Author: Zervanto
* @Date:   2017-05-17 16:32:15
* @Last Modified by:   Zervanto
* @Last Modified time: 2017-05-17 16:32:19
*/

'use strict';
class Real {
  doSomething() {
    console.log('do something...');
  }
}

class Proxy extends Real {
  constructor() {
    super();
  }

  doSomething() {
    setTimeout(super.doSomething, 1000 * 3);
  }
}

new Proxy().doSomething(); //after 3s ,do something...
