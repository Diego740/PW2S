const express = require("express");
const router = express.Router();
const { uploadMiddleware, uploadMiddlewareMemory }= require("../utils/handle_storage.js")
const { createItem, updateImage}= require("../controllers/storage.js")

router.post("/local", uploadMiddleware.single("image"), createItem);
router.post("/", uploadMiddlewareMemory.single("image"), (err, req, res, next) => {
    console.log("ERROR:::::", err.code);
    res.status(413).send('Error capturado')
}  ,updateImage);

/*
router.use((err, req, res, next) => {
    console.log("ERROR:::::", err.code);
    res.status(413).send('Error capturado')
})
    */

module.exports = router;
