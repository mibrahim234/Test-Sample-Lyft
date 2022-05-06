const express = require ('express')

// create port--- initialize app 
const PORT = process.env.PORT || 3001;
const app = express();

// set up middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.post('/test', (req, res) => {
    const string_to_cut = 
    res.json({return_string: string_to_cut})
})

// Starts server 
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });