/**
 * const { getItems, getItem } = require("../controllers/tracks")
 * Obtener lista de la base de datos
 * 
 * @param {*} req
 * @param {*} res
 */

const { trackModel } = require('../models/tracks')
const getItems = async (req, res) => {
  const data = await trackModel.find({});
  res.status(200).send(data)
}

/*
const getItems = (req, res) => {
    const data = ["hola", "mundo"];
    res.send({ data });
  };
*/
  
  const getItem= (req, res) => {res.status(200).send() };

  const createItem = async (req, res) => {
      const {body} = req;
      const data = await trackModels.create(body);
      res.status(200).send({ data });
  };

  const updateItem = (req, res) => { res.status(200).send() };
  const deleteItem = (req, res) => { res.status(200).send() };
  
  module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
  };


