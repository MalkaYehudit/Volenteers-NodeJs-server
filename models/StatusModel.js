import mongoose from "mongoose";

const Schame = mongoose.Schema;
const StatusSchema = new Schame ({
    _id: Number,
    Status: String
});

const StatusModel = mongoose.model("Status", StatusSchema, "Status");
export default StatusModel;