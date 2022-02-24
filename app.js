const chalk = require('chalk')
const { demandOption } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')
const Notes =  require('./notes.js')

//customize yargs version
yargs.version('1.1.0')

//create add comand
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: { 
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
    },
    handler (argv) {
        notes.addNote(argv.title, argv.body)
        // console.log('Title: ' + argv.title)
        // console.log('Body: ' + argv.body)
        // console.log('Adding a new note', argv)
    }
})
//cara debugerr
//node inspect app.js add --title="List1" & --body="sus, mouse"

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        notes.removeNote(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'List your note',
    handler (){
        notes.listNotes() 
    }
})

//create read comannd
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()

//console.log(yargs.argv)

// console.log(process.argv)
// console.log(yargs.argv)
// console.log(process.argv[2])


// if (command === 'add') {
//     console.log('Adding Note!')
// }else if (command === 'remove'){
//     console.log('Remove Note!')
// }

//gunain warna versi s1
// const msggreen = chalk.red.bold.inverse('error')
// console.log(msggreen)

//versi 2
// const log = console.log
// log(chalk.green.inverse.bold('succes!'))

//mencari email
//console.log(validator.isEmail('codeofomiru11@gmail.com'))
//mencari url
//console.log(validator.isURL('https://github.com/muamarzidan'))

// cara mengintal npm
// npm intall (nama npm/modul),,jika pake versi maka jadi =  npm intall (nama npm/modul)@(versinya)



