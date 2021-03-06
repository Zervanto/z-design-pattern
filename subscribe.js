/*
* @Author: Zervanto
* @Date:   2017-05-17 16:33:05
* @Last Modified by:   Zervanto
* @Last Modified time: 2017-05-17 16:33:09
*/

'use strict';
class Event {
  constructor() {
    this.subscribers = new Map([['any', []]]);
  }

  on(fn, type = 'any') {
    let subs = this.subscribers;
    if (!subs.get(type)) return subs.set(type, [fn]);
    subs.set(type, (subs.get(type).push(fn)));
  }

  emit(content, type = 'any') {
    for (let fn of this.subscribers.get(type)) {
      fn(content);
    }
  }
}

let event = new Event();

event.on((content) => console.log(`get published content: ${content}`), 'myEvent');
event.emit('jaja', 'myEvent'); //get published content: jaja
