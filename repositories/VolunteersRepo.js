import VolunteersModel from "../models/VolunteersModel.js";
// import BaseRepo from "./BaseRepo.js";
 import connect from './DB.js';

class VolunteerRepo{
    constructor(model) {
        this.model = model;
        connect();
    }

    async getAll() {
        let volunteer = await this.model.find({}).exec();
        return volunteer;
    }

    async getById(id) {
        try {
            let volunteer = await this.model.findById(id);
            return volunteer;
        }
        catch (errors) {
            throw new Error('Something wrong happened');
        }
    }

    async insert(data) {
        try {
            let volunteer = await this.model.create(data);
            // console.log(volunteer);
            return volunteer;
            
        }
        catch (error) {
            console.log(error.message);
            throw error;
        }
    }
}

export default new VolunteerRepo(VolunteersModel);