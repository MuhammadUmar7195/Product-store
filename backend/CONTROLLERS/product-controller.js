const product = require("../MODELS/product");
const { StatusCodes } = require("http-status-codes");

// Add a new product
const Add = async (req, res) => {
    const { name, price, image } = req.body;

    if (!name || !price || !image) {
        return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "Please provide all fields" });
    }

    try {
        const newProduct = await product.create({ name, price, image });
        res.status(StatusCodes.CREATED).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error in Create product:", error.message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, message: "Server Error" });
    }
};

// Remove a product by ID
const Remove = async (req, res) => {
    const { id } = req.params;

    try {
        const productDeletion = await product.deleteOne({ _id: id });

        if (productDeletion.deletedCount === 0) {
            return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "Invalid ID provided." });
        }

        res.status(StatusCodes.OK).json({ success: true, message: "Product deleted successfully." });
    } catch (error) {
        console.error("Error in Delete product:", error.message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, message: "Server Error" });
    }
};

// Get all products
const getAllData = async (req, res) => {
    try {
        const products = await product.find({});
        res.status(StatusCodes.OK).json({ success: true, data: products });
    } catch (error) {
        console.error("Error in Fetching products:", error.message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, message: "Server Error" });
    }
};

// Update a product by ID
const updateData = async (req, res) => {
    const { id } = req.params;
    const { name, price, image } = req.body;

    if (!name || !price || !image) {
        return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "Please provide all fields" });
    }

    try {
        const updatedProduct = await product.findByIdAndUpdate(
            id,
            { name, price, image },
            { new: true, runValidators: true }
        );

        if (!updatedProduct) {
            return res.status(StatusCodes.NOT_FOUND).json({ success: false, message: "Invalid ID provided." });
        }

        res.status(StatusCodes.OK).json({ success: true, data: updatedProduct });
    } catch (error) {
        console.error("Error in Update product:", error.message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, message: "Server Error" });
    }
};

module.exports = {
    Add,
    Remove,
    getAllData,
    updateData
};
