const Producto = require("../models/Producto");


exports.crearProducto = async (req, res) => {
    try {
        let producto;

        Producto=new Producto(req.body);

        await producto.save();
        res.send(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.listarProducto = async (req, res) => {
    try {

        const productos = await Producto.find();
        res.json(productos)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarProducto = async (req, res) => {
    try {

        const { nombreP, precioP} = req.body;
        let producto = await Producto.findById(req.params.id);

        if(!producto) {
            res.status(404).json({msg: 'El producto no existe'})
        }

        producto.nombreP = nombreP;
        producto.precioP = precioP;

        producto = await Producto.findOneAndUpdate({_id : req.params.id}, producto ,{new: true})
        res.json(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProducto = async (req, res) => {
    try {

        let producto = await Producto.findById(req.params.id);

        if(!producto) {
            res.status(404).json({msg: 'El producto no existe'})
        }

        res.json(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarProducto = async (req, res) => {
    try {

        let producto = await Producto.findById(req.params.id);

        if(!producto) {
            res.status(404).json({msg: 'El producto no existe'})
        }

        await Producto.findOneAndRemove({ _id: req.params.id})
        res.json({ msg: 'producto eliminado'})
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}