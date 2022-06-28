// console.log(Object.keys(process))
// console.log(Object.keys(process.cwd))

//   // Output un prompt
//   process.stdout.write('prompt > ');
//   // El evento stdin 'data' se dispara cuando el user escribe una línea
//   process.stdin.on('data', function (data) {
//     var cmd = data.toString().trim(); // remueve la nueva línea
//     process.stdout.write('You typed: ' + cmd);
//     process.stdout.write('\nprompt > ');
//   });

// const commands = require('./commands');
const commands = require('./commands/index.js');
const print = function (output){
  process.stdout.write(output);
  process.stdout.write("\nprompt >");
}

// Output un prompt
process.stdout.write('prompt > ');
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function (data) {
  
  var args = data.toString().trim().split(" "); // remueve la nueva línea
  var cmd = args.shift();
  if(commands[cmd]) {
    commands[cmd](args,print);
  } else{
    print("command not found")
  }
   
});



// const cmd = 'pwd';

// commands[cmd]() // la función dentro de la propiedad pwd