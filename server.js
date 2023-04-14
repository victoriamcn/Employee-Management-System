inquirer
const inquirer = require('inquirer')

//routes
const api = require('./routes/.js');

//database
const db = require('./db/.sql');

//hide secrets
const env = require('dotenv').config()

//express
const express = require('express');
const app = express();
// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/notes', api);
app.use(express.static('public'));

//PORT
const PORT = process.env.PORT || 3001;

//Array of questions for user input
const questions = [
    {
        type: '',
        name: '',
        message: '',
    },
    {
        type: 'input',
        name: '',
        message: '',
    },
    {
        type: '',
        name: '',
        message: '',
    },
    {
        type: 'input',
        name: '',
        message: '',
    },
    {
        type: 'list',
        name: '',
        message: '',
        choices: ['', '', '', '', 'None'],
    },
    {
        type: '',
        name: '',
        message: '',
    },
    {
        type: '',
        name: '',
        message: '',
    },
    {
        type: 'input',
        name: '',
        message: '',
    },
    {
        type: 'input',
        name: '',
        message: '',
    },
]
//     .then(response) => {
//     //based on responses, generate content
//     const readMeContent = writeToFile(response);
//     // if error, display error. else, display that file generated
//     fs.writeFile('README.md', readMeContent, (err) =>
//         err ? console.log(err) : console.log('Successfully generated your README!')
//     );
// }

// TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt().then((response) => {
//         console.log('Successfully generated your README!')
//         writeToFile('README.md', generateMarkdown({...response}))
//     })
// }

// Function call to initialize app
//init();