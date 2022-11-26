const Product = require('../models/product')

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        if (products.length < 1) {
            res.status(200).json({ msg: 'No products found' })
            return
        }
        if (products) {
            res.status(200).json({ data: products })
        }
    } catch (error) {
        res.status(404).json({ msg: "There was an error finding products" })

    }

}

const createNewProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).json({ data: { product } })
    } catch (error) {
        res.status(400).json({ data: { msg: "There was an error creating new product" } })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id: productID } = req.params
        const product = await Product.findOneAndDelete({ _id: productID })
        if (!product) {
            return
        }
        res.status(200).send({ data: { msg: "Product Deleted" } })
    } catch (error) {
        res.status(400).send({ msg: error })
    }
}


const updateProductQuantity = async (req, res) => {
    try {
        const { id: productID } = req.params
        const { number } = req.query

        if (!number) {
            res.status(400).json({ data: { msg: "Error while updating quantity" } })
            return
        }

        const product = await Product.findOne({ _id: productID })
        let newQuantity = product.quantity + (+number)
        const updatedProduct = await Product.findOneAndUpdate({ _id: productID }, { quantity: newQuantity }, {
            new: true, runValidators: true
        })

        res.status(200).json({ data: { updatedProduct, msg: "Successfully Updated" } })
    } catch (error) {
        res.status(400).json({ data: { msg: "Error while updating quantity" } })
    }
}

module.exports = {
    getAllProducts,
    createNewProduct,
    deleteProduct,
    updateProductQuantity
}