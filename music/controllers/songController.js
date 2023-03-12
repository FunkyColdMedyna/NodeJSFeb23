// status code, header -> app/json, json body with appropriate method, module.exports 

// getSongs
    const getSongs = (req, res, next) => {
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

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({ message: 'Success, getting all songs'})
    }
// postSongs
    const postSong = (req, res, next) => {
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json({ message: 'posting/creating song'})
    }
// deleteSongs
    const deleteSongs = (req, res, next) => {
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({message: `deleting all songs` })
    }

//getSong
    const getSong = (req, res, next) => {
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({ message: `getting song with songId ${req.params.songId}`})
    }

//updateSong
    const updateSong = (req, res, next) => {
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({ message: `updating song with songId ${req.params.songId}`})
    }

//deleteSong
    const deleteSong = (req, res, next ) => {
        res
        .status(200) //204 technically but will not display message for testing
        .setHeader('Content-Type', 'application/json')
        .json({ message: `deleteing song with songId ${req.params.songId}`})
    }

module.exports = {
    getSongs,
    postSong,
    deleteSongs,
    getSong,
    updateSong,
    deleteSong
};