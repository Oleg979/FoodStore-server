var mongoose = require("mongoose");
var OrderSchema = new mongoose.Schema({
    customerId: String,
    itemIds: [{id: String, amount: Number}],
    sum: Number,
    status: {
        type: String,
        default: "NEW"
    },
    creationDate: String
});
mongoose.model("Order", OrderSchema);

module.exports = mongoose.model("Order");
