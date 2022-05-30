const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://arsbhai:arsbhai@cluster0.cdctw.mongodb.net/facebookauth?retryWrites=true&w=majority", {
   useNewUrlParser: true,
  useUnifiedTopology: true,
});

var userSchema = mongoose.Schema({
    uid: String,
    token: String,
    email: String,
    name: String,
    gender: String,
    pic: String
});

module.exports = mongoose.model('User', userSchema);
