// initial set-up
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const ConnectDB = require('./config/db');

//other requirements -> routes
const artist = require('./routes/artist');
const song = require('./routes/song');
const user = require('./routes/user');

//other req. Middlewares
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/error');

// dotenv for path and config files
dotenv.config({ path:'./config/config.env'});
//connect to DB
ConnectDB();

// initialize express
const app = express();


//use - body parser and routes
app.use(logger);
app.use(bodyParser.json());
app.use('/artist', artist);
app.use('/song', song);
app.use('/user', user);
app.use(errorHandler);

//port & server listen to port
const PORT = process.env.PORT || 5001 ;

const server = app.listen(PORT, () => {
    console.log(`Server is listening to Port: ${PORT}`)
});

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`)
    server.close(() => process.exit(1))
})