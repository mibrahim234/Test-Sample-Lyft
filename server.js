const express = require ('express')
// initialize express server 
const app = express();

// handles json data (middleware)
app.use(express.json())
app.use(express.urlencoded({ extended: true }));