// //发起一个用户登录请求，成功后再发送3个查询请求（资料,邮件,消息），最后将结果合并输出结果。
// const Rx = require('rxjs');
//
// console.log(Rx);
// // const {Observable} = require('rxjs/Rx');
// const loginRequest = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         resolve({sessionId:'xxx-xxx-xxx'})
//     }, 2000);
// });
// const queryInfoRequest = function (sessionId) {
//     return new Promise((resolve, reject) => {
//             setTimeout(function () {
//                 resolve({
//                     id:1,
//                     nickName:'lake'
//                 })
//             }, 1000)
//         }
//     )
// };
// const queryEmailRequest = function (sessionId) {
//     return new Promise((resolve, reject) => {
//             setTimeout(function () {
//                 resolve([
//                     {id:1,title:'hi',content:'I miss you'},
//                     {id:2,title:'are you there',content:'how are you doing'}
//                 ])
//             }, 1000)
//         }
//     )
// };
// const queryMessageRequest = function (sessionId) {
//     return new Promise((resolve, reject) => {
//             setTimeout(function () {
//                 resolve([
//                     {id:1,type:'TEXT',content:'I am ok'},
//                     {id:2,type:'TEXT',content:'yeah'}
//                 ])
//             }, 1000)
//         }
//     )
// };
// const oldTime = new Date().getTime();
// Rx.Observable.fromPromise(loginRequest)
//     .flatMap(sessionId=>{
//         return [
//             Rx.Observable.fromPromise(queryInfoRequest(sessionId)),
//             Rx.Observable.fromPromise(queryEmailRequest(sessionId)),
//             Rx.Observable.fromPromise(queryMessageRequest(sessionId)),
//         ];
//     })
//     .combineAll()
//     .subscribe(value => {
//         console.log(value);
//         console.log("总运行时长:"+(new Date() - oldTime));
//     });
//
// import './js/rxjs'

// require("expose-loader?$!jquery");
import 'bootstrap';

import './css/index.scss'

import 'bootstrap-table'
import 'bootstrap-table/dist/locale/bootstrap-table-zh-CN.min'

import "jquery-resizable-columns/dist/jquery.resizableColumns.min";
import "jquery-resizable-columns/dist/jquery.resizableColumns.css";
import './js/bootstrap-table-resizable.min'

import 'bootstrap-table/dist/bootstrap-table.css'
import './js/creatTable'
