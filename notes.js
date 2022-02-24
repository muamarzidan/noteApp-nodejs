const chalk = require('chalk')
const fs = require ('fs')


const getNotes = () => {
    return 'Your notes...'

}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title) //pake cara method find untuk nyari

    debugger
    //console.log(duplicateNote)
    //using filter fun
    //const duplicateNotes = notes.filter((note) => note.title === title)
    // not using arrow function
    // const duplicateNotes = notes.filter(function (note){
    //     return note.title === title
    // })

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New Note Added'))
    }else {
    console.log(chalk.red.inverse('Note title Taken'))
    }

}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesTokeep = notes.filter((note) => note.title !== title)
    // not using arrow function
    // const notesTokeep = notes.filter(function(note){
    //     return note.title !== title
    // })

    if(notes.length > notesTokeep.length){
        console.log(chalk.green.inverse('note remove'))
    }else {
        console.log(chalk.red.inverse('Note Not Found'))
    }

    saveNotes(notesTokeep)

}

//list untuk laod notes jadi bisa keupload
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green.inverse('Your Notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(chalk.inverse(note.body))

    }else{
        console.log(chalk.red.inverse('note not found'))

    }


}



const saveNotes = (notes) => { 
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (e){
        return []
    }
}
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}