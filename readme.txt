globals ={
    No window
    _dirname - path to current directory
    _filename - file name
    require - functions to use modules (commonJS)
    module - info about current module (file)
    process - info about env where the prgogram is being executed
}
modules = {
    There are some builtin modules in Node.Js like :
    1. OS = operating system module
    2. Path = path accessing module 
    3. Fs module = file system module
    4. HTTP module = Http module for servers and all
    how to access builtin modules = require('//name of builtin module')
}
NPM = {
    npm - global command, comes with node.
    npm --version - tells you the version of npm
    There is one more file which we use 
    package.json - manifest file(stores important info about projects/package)
    ways to create package.json:
        1. manual approach (create package.json file in root, create properties etc).
        2. npm init (step by step, press enter to skip).
        3. npm init -y (creates package.json file with everything default).
}

nodemon = {
    to run any js file using "npm start" command in terminal, copy paste the code from the main file to app.js
    ex. - copy fs-async-module.js code to app.js to run it using npm start
}


