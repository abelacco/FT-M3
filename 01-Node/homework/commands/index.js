var fs = require('fs');
let request = require("request");



module.exports = {
    pwd: (args,print) => {print(process.cwd())},
    date: (args,print) => { print(Date()) },
    ls: (args,print) =>{fs.readdir('.', function(err, files) {
        if (err) throw err;
        print(files.join("\n"))
        })},
    echo: (args,print) => {print(args.join(" "))},
    cat: (args,print) => {
        fs.readFile(args[0], "utf8", function(err,data){
            if(err) throw err;
            print(data)
        })
    },
    head: (args,print) => {
        fs.readFile(args[0], "utf8", function(err,data){
            if(err) throw err;
            print(data.split("\n").splice(0,args[1]).join("\n"))
        })
    },
    tile: (args,print) => {
        fs.readFile(args[0], "utf8", function(err,data){
            if(err) throw err;
            print(data.split("\n").splice(-args[1]).join("\n"))
        })
    },
    curl: (args,print) => {
        request(args[0], "utf8", function(err,data){
            if(err) throw err;
            print(data.body);
        })
    }

    
}