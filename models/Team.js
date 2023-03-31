const { Schema, model } = require("mongoose");

const teamSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  social: [
    {
      name: String,
      link: String,
    },
  ],
});

module.exports = model("Team", teamSchema);
