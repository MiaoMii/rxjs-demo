//控制一秒钟内最多点击一次
const {Observable} = require('rxjs/Rx');
var button = document.querySelector('button');
Observable.fromEvent(button, 'click')
    .throttleTime(1000)
    .scan(count => count + 1, 0)
    .subscribe(count => console.log(`Clicked ${count} times`));