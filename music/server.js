// initial set-up
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

//other requirements -> routes
const artist = require('./routes/artist');
const song = require('./routes/song');
const user = require('./routes/user');

// initialize express
const app = express();

// dotenv for path and config files
dotenv.config({ path:'./config/config.env'});

//use - body parser and routes
app.use(bodyParser.json());
app.use('/artist', artist);
app.use('/song', song);
app.use('/user', user);

//port & server listen to port
const PORT = process.env.PORT || 5001 ;

const server = app.listen(PORT, () => {
    console.log(`Server is listening to Port: ${PORT}`)
});
