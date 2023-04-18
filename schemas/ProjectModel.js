const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    technologies: [String],
    image: String,
    link: String,
});

// Define the Project model
module.exports = mongoose.model("Project", projectSchema);
