const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
    createMusic,
    getMusicByUser,
    editMusic,
    deleteMusic,
    getSingleMusic,
} = require("../controllers/musicController");
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

// Configure Multer for file upload using memory storage
const storage = multer.memoryStorage();
const uploadMusic = multer({ storage: storage });

// Route for uploading music with authentication middleware
router.post(
    "/upload",
    uploadMusic.single("musicFile"),
    createMusic
);

// Route to get all music uploaded by the authenticated user
router.get("/get-music", getMusicByUser);

router.get("/get-music/:id", getSingleMusic);

// Route to edit a specific music record (including the music file) by ID
router.put(
    "/edit-music/:id",
    uploadMusic.single("musicFile"),
    editMusic
);

// Route for deleting a music record by ID
router.delete("/delete-music/:id", deleteMusic);

module.exports = router;
