// status code, header -> app/json, json body with appropriate method, module.exports 
const User = require('../models/User');
// getUsers
const getUsers = async (req, res, next) => {
    //query params 
    //check to see if there are any keys in the query
    if (Object.keys(req.query).length) {
        const { userName, gender } = req.query;
        const filter = [];
        if (userName) filter.push(userName)
        if (gender) filter.push(gender)

        for(const query of filter) {
            console.log(`Searching user by: ${query}`)
        }
    }
    try {
        const users = await User.find()
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(users)
    } catch (err) {
        next(err)
    }
}
// postUsers
const postUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body)
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(user)
    } catch (err) {
        next(err)
    }
}
// deleteUsers
const deleteUsers = async (req, res, next) => {
    try {
        const deletedUsers = await User.deleteMany()      
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedUsers)
    } catch(err) {
        next(err)
    }
}

// '/:userId
//getUser()
const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId)
        res
        .status(200)
        .setHeader('Content-Type','application/json')
        .json(user)
    } catch (err) {
        next(err)
    }
}
//updateUser()
const updateUser = async (req, res, next) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.userId, req.body, {new:true})
        res
        .status(200)
        .setHeader('Content-Type','application/json')
        .json(user)
    } catch(err){
        next(err)
    }
}
//deleteUser()
const deleteUser = async (req,res,next) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.userId)
        res
        .status(200)
        .setHeader('Content-Type','application/json')
        .json(deletedUser)
    } catch(err) {
        next(err)
    }
}

module.exports = {
getUsers,
postUser,
deleteUsers,
getUser,
updateUser,
deleteUser
};