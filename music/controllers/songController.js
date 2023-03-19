// status code, header -> app/json, json body with appropriate method, module.exports 
const Song = require('../models/Song');
// getSongs
    const getSongs = async (req, res, next) => {
        //query param -> if there are any keys in the query 
        if (Object.keys(req.query).length) {
            //destructure key-names looking for
            const {
                songTitle,
                artist,
                genre
            } = req.query;

            //instantiate filter array to hold queries
            const filter = [];

            // if any of the keys exist in the req.query, push them into the filter array
            if (songTitle) filter.push(songTitle)
            if (artist) filter.push(artist)
            if (genre) filter.push(genre)

            //for each query element in the filter array console.log()
            for (const query of filter ) {
                console.log(`searching item by ${query}`)
            }
        }
        try {
            const songs = await Song.find()
            res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .json(songs)
        } catch (err) {
            next(err)
        }
    }
// postSongs
    const postSong = async (req, res, next) => {
        try {
            const song = await Song.create(req.body)
            res
            .status(201)
            .setHeader('Content-Type', 'application/json')
            .json(song)
        } catch (err) {
            next(err)
        }
    }
// deleteSongs
    const deleteSongs = async (req, res, next) => {
        try {
            const deletedSongs = await Song.deleteMany()
            res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .json(deletedSongs)
        } catch (err) {
            next(err)
        }
    }

///user/:userId -> individual assests
//getSong
    const getSong = async (req, res, next) => {
        try{
            const song = await Song.findById(req.params.songId)
            res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .json(song)
        } catch (err) {
            next(err)
        }
    }

//updateSong
    const updateSong = async (req, res, next) => {
        try {
            const song = await Song.findByIdAndUpdate(req.params.songId, req.body, {new: true})
            res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .json(song)
        } catch (err) {
            next(err)
        }
    }

//deleteSong
    const deleteSong = async (req, res, next ) => {
        try {
            const deletedSong = await Song.findByIdAndDelete(req.params.songId)
            res
            .status(200) //204 technically but will not display message for testing
            .setHeader('Content-Type', 'application/json')
            .json(deletedSong)
        } catch (err) {
            next(err)
        }
    }

module.exports = {
    getSongs,
    postSong,
    deleteSongs,
    getSong,
    updateSong,
    deleteSong
};