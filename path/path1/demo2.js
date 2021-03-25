const path = require('path');

path.resolve()

console.log(". = %s", path.resolve("."));   //执行node命令的路径
console.log("__dirname = %s", path.resolve(__dirname)); //被执行js的绝对路径

/*
*   执行 node demo2.js
*   . = E:\project\test\rxjs-demo\path\path1
*   __dirname = E:\project\test\rxjs-demo\path\path1
*
*   执行 node path1/demo2.js
*   . = E:\project\test\rxjs-demo\path
*   __dirname = E:\project\test\rxjs-demo\path\path1
*/

//require 中的路径总是相对于包含它的文件，跟你的工作目录没有关系。
let fun = require('../fun')