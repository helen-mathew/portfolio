import mongoose from "mongoose";
require("dotenv").config();

// Define the project schema
const Project = require("../../schemas/ProjectModel");

export default async function handler(req, res) {
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const projects = await Project.find({});
    res.status(200).json(projects);

    mongoose.connection.close();
}
