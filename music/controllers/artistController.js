// status code, header -> app/json, json body with appropriate method, module.exports 

// getArtists
const getArtists = (req, res, next) => {
    //query params
    if (Object.keys(req.query).length) {
        const {
            firstName,
            lastName,
            genre
        } = req.query

        const filter = [];
        if (firstName) filter.push(firstName)
        if (lastName) filter.push(lastName)
        if (genre) filter.push(genre)

        for (const query of filter) {
            console.log(`Searching artist by ${query}`)
        }
    }
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
    .json({ message: 'success, posting/creating artist'})
}
// deleteSongsArtist
const deleteArtists = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: 'success, deleting all artists'})
}

//getArtist
const getArtist = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type','application/json')
    .json({ message: `getting artist with artistId ${req.params.artistId}`})
}

//updateArtist
const updateArtist = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type','application/json')
    .json({ message: `updating artist with artistId ${req.params.artistId}`})
}
//deleteArtist
const deleteArtist = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type','application/json')
    .json({ message: `deleteing artist with artistId ${req.params.artistId}`})
}
module.exports = {
getArtists,
postArtist,
deleteArtists,
getArtist,
updateArtist,
deleteArtist
};