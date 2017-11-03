var events = require('events');
var util = require('util');
var fs = require('fs');

// <@-- Event Emitter --@>

// var myEmitter = new events.EventEmitter();
//
// myEmitter.on('SomeEvent', (msg)=>{
//   console.log(msg);
// });
//
// myEmitter.emit('SomeEvent', 'Event was emitted');

// var myEmitter = events.EventEmitter;
//
// var Person = function(name){
//   this.name = name;
// }
//
// util.inherits(Person, myEmitter);
//
// var James = new Person('James');
// var John = new Person('John');
// var Joe = new Person('Joe');
//
// var people = [James, John, Joe];
//
// people.forEach((person)=>{
//   person.on('speak', (msg)=>{
//     console.log(msg);
//   });
// });
//
// James.emit('speak', 'James spoke');
// Joe.emit('speak', 'Joe spoke');
// John.emit('speak', 'John spoke');

// console.time('fileTimer');
// Async File Read and Write Working without blocking any other code snippet
// fs.readFile('readMe.txt', 'utf8', (err, data)=>{
//     fs.writeFile('writeMe.txt', data, (err)=>{console.log(err);});
// });
// console.timeEnd('fileTimer');

// Manipulating the Directories in Async Way
// fs.mkdir('stuff', ()=>{
//   fs.readFile('readMe.txt', 'utf8', (err, data)=>{
//     fs.writeFile('./stuff/writeMe.txt', data ,(err)=>{
//       if(err){
//         console.log(err);
//       }
//       else{
//         console.log('File Created successfully inside the stuff folder');
//       }
//     });
//   })
// });
