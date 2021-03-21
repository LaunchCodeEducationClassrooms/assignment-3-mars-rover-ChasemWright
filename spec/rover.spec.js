const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  it("constructor sets position and default values for mode and generatorWatts",function(){
    let rover = new Rover(20)
    expect(typeof rover.position === 'number' &&rover.position === 20 &&rover.mode === 'NORMAL' &&rover.generatorWatts === 110).toBeTrue();
  });

  it("response returned by receiveMessage contains name of message", function(){
    let rover = new Rover (100)
    let message = new Message('dog')
    expect(rover.recieveMessage(message).name).toEqual('dog')
  })

  it("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
    let rover = new Rover(100)
    let message = new Message('dog', 'STATUS_CHECK')
    expect(Object.keys(rover.recieveMessage(message)).length).toEqual(Object.keys(message).length)
  })

  it("responds correctly to status check command", function(){
   let command = new Command('STATUS_CHECK')
   let rover = new Rover(100)
   let message = new Message('First Command', command)
    expect(rover.recieveMessage(message)).toEqual(`completed: true, roverStatue: { mode: ${rover.mode}, generatorWatts: ${rover.generatorWatts}, position: ${rover.position}`)
  })

//   it("responds correctly to mode change command", function(){

//   })

//   it("responds with false completed value when attempting to move in LOW_POWER mode", function() {

//   })

//   it("responds with position for move command", function(){

//   })
// });
});

