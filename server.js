const express = require ('express')
// initialize express server 
const app = express();

// handles json data (middleware)
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.post('/test', (req, res) => {
    const string_to_cut = 
    res.json({return_string: string_to_cut})
})

app.listen(3000, () => {
    console.log('On Port 3000!')
    })