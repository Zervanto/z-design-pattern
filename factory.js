/*
* @Author: Zervanto
* @Date:   2017-05-17 16:26:20
* @Last Modified by:   Zervanto
* @Last Modified time: 2017-05-17 16:26:29
*/

'use strict';
class CarMaker {
  constructor() {
    this.doors = 0;
  }

  drive() {
    console.log(`hi, i have ${this.doors} doors`);
  }

  static factory(type) {
    return new CarMaker[type]();
  }
}

CarMaker.Compact = class Compact extends CarMaker {
  constructor() {
    super();
    this.doors = 4;
  }
};

CarMaker.factory('Compact').drive(); // 'hi, i have 4 doors'