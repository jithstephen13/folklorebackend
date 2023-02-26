const mongoose = require("mongoose");



const addtocartSchema = mongoose.Schema({
    img1: { type: String, required: true },
    img2: { type: String, required: true },
    img3: { type: String, required: true },
    img4: { type: String, required: true },
    name: { type: String, required: true },
    brand: { type: String, required: true } ,
    lowprice: { type: Number, required: true },
    highprice: { type: Number, required: true },
    rating: { type: Number, required: true },
    id: { type: Number, required: true },
    quantity: { type: Number, required: true },
    _id: { type: String, required: true },
    
}, {
    versionKey: false
});



const CartModel = mongoose.model("cart", addtocartSchema);



module.exports = { CartModel };