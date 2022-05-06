const express = require ('express')

// create port--- initialize app 
const PORT = process.env.PORT || 3001;
const app = express();

// set up middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Return a JSON object with the key “return_string” and  a string containing every third letter from the original string
const cutString = str => {
    let newStr = '';
    const chars = str.split('');
    for (let i = 2; i < chars.length; i += 3) {
        newStr += chars[i];
    }
    return {return_string: newStr };
};

// Accept a POST request to the route “/test” which accepts one arg string_to_cut 
app.post('/test', (req, res) => {
    const { string_to_cut } = req.body; 
  // check to see if they are strings 
    if (string_to_cut && typeof string_to_cut === 'string') {
        res.json(cutString(string_to_cut))
    } else {
        // sends error message if info is incorrect 
        res.status(400).send({
            error: "Expected Output: {string_to_cut: <string> }"
        });
    }
});

// Starts server 
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });