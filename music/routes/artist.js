const express = require('express')
const router = express.Router();
const {
    getArtists,
    postArtist,
    deleteArtist
} = require('../controllers/artistController');

router.route('/')
    .get(getArtists)
    .post(postArtist)
    .delete(deleteArtist)

module.exports = router;