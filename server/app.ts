import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('API ON')
})

app.listen(8000, () => {
    console.log(`API CI/CD listening on port 8000!`)
})
