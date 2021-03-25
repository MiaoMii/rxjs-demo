const {Observable} = require('rxjs/Rx');
let stream = Observable.interval(1000).take(10);
console.log(stream.map(n => n * 2))