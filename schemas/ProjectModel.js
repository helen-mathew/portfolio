const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    technologies: [String],
    image: String,
    link: String,
});

// Define the Project model
// if (mongoose.models && mongoose.model.Project) {
//     module.exports = mongoose.model.Project;
// }
module.exports =
    mongoose.model.Project || mongoose.model("Project", projectSchema);
