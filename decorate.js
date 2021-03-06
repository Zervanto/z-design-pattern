/*
* @Author: Zervanto
* @Date:   2017-05-17 16:27:34
* @Last Modified by:   Zervanto
* @Last Modified time: 2017-05-17 16:27:39
*/

'use strict';
class Sale {
  constructor(price) {
    [this.decoratorsList, this.price] = [[], price];
  }

  decorate(decorator) {
    if (!Sale[decorator]) throw new Error(`decorator not exist: ${decorator}`);
    this.decoratorsList.push(Sale[decorator]);
  }

  getPrice() {
    for (let decorator of this.decoratorsList) {
      this.price = decorator(this.price);
    }
    return this.price.toFixed(2);
  }

  static quebec(price) {
    return price + price * 7.5 / 100;
  }

  static fedtax(price) {
    return price + price * 5 / 100;
  }
}

let sale = new Sale(100);
sale.decorate('fedtax');
sale.decorate('quebec');
console.log(sale.getPrice()); //112.88
