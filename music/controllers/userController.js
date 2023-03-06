// status code, header -> app/json, json body with appropriate method, module.exports 

// getUsers
const getUsers = (req, res, next) => {
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
const deleteUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: 'deleting user'})
}

module.exports = {
getUsers,
postUser,
deleteUser
};