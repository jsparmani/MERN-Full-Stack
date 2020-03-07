const mongoose = require("mongoose");
const {ObjectID} = mongoose.Schema;

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 32
        },
        description: {
            type: String,
            maxlength: 2000,
            trim: true,
            required: true
        },
        price: {
            type: Number,
            required: true,
            maxlength: 32,
            trim: true
        },
        category: {
            type: ObjectID,
            ref: "Category",
            required: true
        },
        stock: {
            type: Number
        },
        sold: {
            type: Number,
            default: 0
        },
        photo: {
            type: Buffer,
            contentType: String
        }
    },
    {timestamps: true}
);

module.export = mongoose.model("Product", productSchema);
