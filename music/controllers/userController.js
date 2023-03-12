// status code, header -> app/json, json body with appropriate method, module.exports 

// getUsers
const getUsers = (req, res, next) => {
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
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Success, getting all users'})
}
// postUsers
const postUser = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'posting/creating user'})
}
// deleteUsers
const deleteUsers = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: 'deleting user'})
}

// '/:userId
//getUser()
const getUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type','application/json')
    .json({ message: `getting user with userId ${req.params.userId}`})
}
//updateUser()
const updateUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type','application/json')
    .json({ message: `updating user with userId ${req.params.userId}`})
}
//deleteUser()
const deleteUser = (req,res,next) => {
    res
    .status(200)
    .setHeader('Content-Type','application/json')
    .json({ message: `deleting user with userId ${req.params.userId}`})
}

module.exports = {
getUsers,
postUser,
deleteUsers,
getUser,
updateUser,
deleteUser
};