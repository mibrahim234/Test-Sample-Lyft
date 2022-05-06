const express = require ('express')

// create port--- initialize app 
const PORT = process.env.PORT || 3001;
const app = express();

// set up middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Return a JSON object with the key “return_string” and
// a string containing every third letter from the original string
const cutString = str => {
    let prevStr = '';
    const chars = str.split('');
    for (let i = 2; i < chars.length; i+=3) {
        prevStr += chars[i];
    }
    return {return_string: prevStr };
};

app.post('/test', (req, res) => {
    const string_to_cut = 
    res.json({return_string: string_to_cut})
})

// Starts server 
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });