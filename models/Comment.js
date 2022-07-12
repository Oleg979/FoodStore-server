var mongoose = require("mongoose");
var CommentSchema = new mongoose.Schema({
    itemId: String,
    text: String,
    userName: String,
    creationDate: String,
    sentimentResult: Number
});
mongoose.model("Comment", CommentSchema);

module.exports = mongoose.model("Comment");
