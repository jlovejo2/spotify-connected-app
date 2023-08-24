const express = require('express')

const app = express();

app.get('/', (req, res) => {
    const data = {
        name: 'Eddie',
        isAwesome: true
    }

    res.json(data);
})

app.get('/awesome-generator', (req, res) => {
    const { name, isAwesome } = req.query;
    res.send(`${name} is ${JSON.parse(isAwesome) ? 'really' : 'not'} awesome`)
})

const port = 8080;
app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`)
});

