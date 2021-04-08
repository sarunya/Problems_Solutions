var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the eventhandler to an event:
eventEmitter.on('scream1', myEventHandler);

//Assign the eventhandler to an event:
eventEmitter.on('sum', function(a,b) {
  console.log("sum is ", (a+b));
});

//Fire the 'scream' event:
eventEmitter.emit('scream1');

eventEmitter.emit('sum', 1, 2);


function printNum(val) {
  val = val + "a";
  console.log(val);
  for(let j= 100000000; j>=0; j--) {
    val.concat(val);
  }
  if(val == 50 ) {
    return;
  }
  if(val == 5) {
    val.data.data;
  }
  val
  printNum(val); 

}
                                              // 2 -> printNum(2)
try {
  printNum(1);    
                 } catch(err) {
                   console.log(err);
                 }                 //stack: FiLo   1 -> printNum(1)



