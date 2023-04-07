// status code, header -> app/json, json body with appropriate method, module.exports 
const Song = require('../models/Song');
// getSongs
    const getSongs = async (req, res, next) => {
        //query param -> if there are any keys in the query 
        const filter = {};
        const options = {};
        if (Object.keys(req.query).length) {
            //destructure key-names looking for
            const {
                limit,
                sortByArtist,
                songTitle,
                artist,
                genre,
            } = req.query;

            if (songTitle) filter.songTitle = songTitle;
            if (artist) filter.artist = artist;
            if (genre) filter.genre = genre;

            if (limit) options.limit = limit; 
            if (sortByArtist) options.sort = {
                category: sortByArtist === 'asc' ? 1 : -1
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

//SongRatings
    const getSongRatings = async (req, res, next) => {
        try {
            const song = await Song.findById(req.params.songId)
            res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .json(song.ratings)

        } catch (err) {
            next(err)
        }
    }

    const postSongRating = async (req, res, next) => {
        try {
            const song = await Song.findById(req.params.songId)
            song.ratings.push(req.body)

            const result = await song.save()

            res
            .status(201)
            .setHeader('Content-Type', 'application/json')
            .json(result)
        } catch (err) {
            next(err)
        }
    }

    const deleteSongRatings = async ( req, res, next ) => {
        try {
            const song = await Song.findById(req.params.songId)
            song.ratings = [];
            await song.save()

            res
            .status(200)
            .setHeader('Content-Type','application/json')
            .json({msg: `song ratings were deleted for song with songId of ${song.songId}`})

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
    deleteSong,
    getSongRatings,
    postSongRating,
    deleteSongRatings
};