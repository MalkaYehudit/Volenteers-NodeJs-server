import mongoose from "mongoose";

const Schame = mongoose.Schema;
const VolunteersSchema = new Schame ({
    _id : Number,
    id : String,
    description : String,
    firstName : String,
    lastName : String,
    phone : String,
    specialization : Array
});

const VolunteersModel = mongoose.model("volunteers", VolunteersSchema,"volunteers");
export default VolunteersModel;
