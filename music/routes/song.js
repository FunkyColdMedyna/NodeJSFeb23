const express = require('express');
const {
    getSongs,
    postSong,
    deleteSong
} = require('../controllers/songController');

const router = express.Router();

router.route('/')
    .get(getSongs)
    .post(postSong)
    .delete(deleteSong)

module.exports = router;