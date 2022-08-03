const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// define schemas
const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String,
});

module.exports = mongoose.model("Book", bookSchema);
