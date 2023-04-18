import mongoose from "mongoose";
require("dotenv").config();

// Define the project schema
import Project from "../../../schemas/ProjectModel";

export default async function handler(req, res) {
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const id = req.query.pid;
    console.log(id);
    const projects = await Project.findOne({slug: id});
    res.status(200).json(projects);

    mongoose.connection.close();
}
