import HelpRequestModel from "../models/HelpRequestModel.js";
import connect from './DB.js';
import buildPipe from '../files/Pipeline.js';
import filters from "../files/filter.js";
import { byId } from "../files/filter.js";

class HelpRequestRepo {
    constructor(model) {
        this.model = model;
        connect();
    }
  
    async getAll(props) {
        let smallPipe = filters(props);
        let agg = buildPipe(smallPipe);
        let data = await this.model.aggregate(agg).exec();
        //let data = await this.model.find({}).exec();
        return data;

    }

    async getById(id) {
        try {
            
            const smallPipe = byId(id);
            const pipeline = buildPipe(smallPipe)
            let req = await this.model.aggregate(pipeline).exec(); 
            if (!req) {
                let error = new Error('Item not found');
                error.statusCode = 404;
                throw error;
            }

            return req;
        } catch (errors) {
            throw errors;
        }
    }



    async update(id, data) {
        try {
            let item = await this.model.findByIdAndUpdate(id, data, { new: true });
            return item;
        } catch (errors) {
            throw errors;
        }
    }
}
export default new HelpRequestRepo(HelpRequestModel);

