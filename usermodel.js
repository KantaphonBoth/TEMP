var mongoose = require("mongoose");

var usersSchema = mongoose.Schema(
  {
    // กำหนด ชื่อและชนิดของ document เรา
    Temp: {
      type: String
    }
  },
  {
    collection: "temps"
  }
);

var User = mongoose.model("temps", usersSchema);
module.exports = User;