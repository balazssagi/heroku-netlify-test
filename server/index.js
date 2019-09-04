const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 8080;

app.use(cors())

app.get('/', (req, res) => res.send('Hello from the server!'))

app.listen(port, () => console.log(`Server listening on port ${port}!`))