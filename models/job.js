import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema({
  {
    title: String,
    company: String,
    salary: String,
  },
});

const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);

export default Job;
