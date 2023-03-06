// status code, header -> app/json, json body with appropriate method, module.exports 

// getSongs
    const getSongs = (req, res, next) => {
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
    const deleteSong = (req, res, next) => {
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({message: 'deleting song'})
    }


module.exports = {
    getSongs,
    postSong,
    deleteSong
};