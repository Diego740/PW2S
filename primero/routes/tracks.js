const express = require("express");
const router = express.Router();

const {getItems, getItem, createItem} = require("../controllers/tracks.js");


router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', createItem);

/*
router.get("/", (req, res) => {
  const data = ["hola", "mundo", "tracks"];
  res.send({ data });
});
*/

module.exports = router;


/*

  const { getItems, getItem } = require("../controllers/tracks")
  router.get("/", getItems)
  router.get("/:id", getItem)

*/