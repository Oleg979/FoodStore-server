var mongoose = require("mongoose");
mongoose.connect(
    "mongodb://localhost:27017/sstu-ecommerce",
    { useNewUrlParser: true }
).then(() => {
    console.log("Connected to db")
});
