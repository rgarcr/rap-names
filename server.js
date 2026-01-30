const express = require('express');
const app = express();
const PORT = 8000;

const rappers = {
    '21 savage': {
        age: 29,
        birthName: 'Sheyaa Bin Abraham-Joseph',
        birthLocation: 'London, England'
    },
    'chance rhe rapper': {
        age: 30,
        birthName: 'Chancee',
        birthLocation: 'Chicago, Illonois'
    },
    'dylon': {
        age: 30,
        birthName: 'Dylon',
        birthLocation: 'Test Dylon'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')

})

app.get('/api/', (req, res) => {
    res.json(rappers)
})

app.get('/api/:rapperName', (req, res) => {
    const rapperName = req.params.rapperName.toLocaleLowerCase();
    if (rappers[rapperName])
        res.json(rappers[rapperName])
    else
        res.json(rappers['dylon']);
})

//listen on
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`)
})