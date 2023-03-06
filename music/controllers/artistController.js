// status code, header -> app/json, json body with appropriate method, module.exports 

// getArtists
const getArtists = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Success, getting all artists'})
}
// postArtist
const postArtist = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'posting/creating artist'})
}
// deleteSongsArtist
const deleteArtist = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: 'deleting artist'})
}

module.exports = {
getArtists,
postArtist,
deleteArtist
};