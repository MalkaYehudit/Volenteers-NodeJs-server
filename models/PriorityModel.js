import mongoose from "mongoose";

const Schame = mongoose.Schema;
const PrioritySchema = new Schame ({
     _id: Number,
    Priority: String
});

const PriorityModel = mongoose.model("Priority", PrioritySchema,"Priority");
export default PriorityModel;