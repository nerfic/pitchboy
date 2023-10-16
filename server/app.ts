import express from 'express';
import routes from './src/Router/router';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('API ON')
})

app.use(routes)

app.listen(8000, () => {
    console.log(`API CI/CD listening on port 8000!`)
})
