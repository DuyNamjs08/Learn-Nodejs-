const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let a = 12
    let b = 32
    let c = a + b
    return res.send('Hello Nam ban rat handsome  dsadsda ')
})
app.listen(port, () => {
    console.log(`example app listening on port http://localhost:${port}`)
})