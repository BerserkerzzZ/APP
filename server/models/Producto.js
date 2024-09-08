const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombreP: { type: String, required: true },
  precioP: { type: Number, required: true },
  imgP: {type: String, required: true}
});

const Producto = mongoose.model('Producto', productoSchema, 'producto');

module.exports = Producto;