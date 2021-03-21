const Message = require('./message.js');
const Command = require('./command.js');

class Rover {
  constructor(position){
    this.position = Number(position);
    this.mode = 'NORMAL';
    this.generatorWatts = 110;
  }

  recieveMessage(message){
    let obj = new Message(message.name, message.commands)
    if (obj.commands = undefined){
      return obj.name
    } else if (obj.commands.commandType === "STATUS_CHECK"){
      return (`completed: true, roverStatue: { mode: ${this.mode}, generatorWatts: ${this.generatorWatts}, position: ${this.position}`)
    } else {
      return obj
    }
    
  }
}

module.exports = Rover;