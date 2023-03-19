// status code, header -> app/json, json body with appropriate method, module.exports 
const Artist = require('../models/Artist');
// getArtists
const getArtists = async (req, res, next) => {
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
    try {
        const artists = await Artist.find()
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(artists)
    } catch (err) {
        throw new Error(`Error retrieving artists: ${err.message}`)
    }
}
// postArtist
const postArtist = async (req, res, next) => {
    try {
        const artist = await Artist.create(req.body)
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(artist)
    } catch (err) {
        throw new Error(`Error creating artist: ${err.message}`)
    }
}
// deleteSongsArtist
const deleteArtists = async (req, res, next) => {
    try{
        const deletedArtists = await Artist.deleteMany()
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedArtists)
    } catch(err){
        throw new Error(`Error deleteing artists: ${err.message}`)
    }
}

// /artist/:artistId -> individual assets
//getArtist
const getArtist = async (req, res, next) => {
    try {
        const artist = await Artist.findById(req.params.artistId)
        res
        .status(200)
        .setHeader('Content-Type','application/json')
        .json(artist)
    } catch (err) {
        next(err)
    }
}

//updateArtist
const updateArtist = async (req, res, next) => {
    try {
    const artist = await Artist.findByIdAndUpdate(req.params.artistId, req.body, {new: true})
    res
    .status(200)
    .setHeader('Content-Type','application/json')
    .json(artist)
    } catch(err) {
        next(err)
    }
}
//deleteArtist
const deleteArtist = async (req, res, next) => {
    try{ 
        const deletedArtist = await Artist.findByIdAndDelete(req.params.artistId)
        res
        .status(200)
        .setHeader('Content-Type','application/json')
        .json(deletedArtist)
    } catch(err) {
        next(err)
    }
}
module.exports = {
getArtists,
postArtist,
deleteArtists,
getArtist,
updateArtist,
deleteArtist
};