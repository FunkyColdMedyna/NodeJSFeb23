const mongoose = require('mongoose')

const ConnectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URL)

    console.log(`MongoDB Connected: ${conn.connection.host}`)
}

module.exports = ConnectDB;