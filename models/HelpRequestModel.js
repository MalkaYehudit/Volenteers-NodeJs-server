import mongoose from "mongoose";

const Schame = mongoose.Schema;
const HelpRequestSchema = new Schame ({
    _id: Number,
    location: String,
    description: String,
    phone: String,
    status : Number,
    numOfPeopleStuck: Number,
    priority: Number,
    volunteerId: String
});

const HelpRequestModel = mongoose.model("helpRequests", HelpRequestSchema,"helpRequests");
export default HelpRequestModel;