
const express = require('express');
const server = express();
const colors = require('colors');

server.get('/', (req, res)=>{
    res.send('<h1>Hola Mundo con Express y Node</h1>')
    res.end();
})
server.listen(3000, () =>  {
    console.log('Server on port 3000'.red);
})