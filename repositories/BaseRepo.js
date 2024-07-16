import connect from './DB.js';
import {byParams, byId} from '../files/filter.js'
import buildPipe from '../files/Pipeline.js';


class BaseRepo {
    constructor(model) {
        this.model = model;
        connect();
    }

    async getAll(params) {
        const smallPipe = byParams(params);
        const pipeline = buildPipe(smallPipe)
        let req = await this.model.aggregate(pipeline).exec();
        return req;
    }
        

    async get(id) {
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

    // async insert(data) {
    //     try {
    //         let item = await this.model.create(data);
    //         if (item) {
    //             return item;
    //         } else {
    //             throw new Error('Something wrong happened');
    //         }
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    // async update(id, data) {
    //     try {
    //         let item = await this.model.findByIdAndUpdate(id, data, { new: true });
    //         return item;
    //     } catch (errors) {
    //         throw errors;
    //     }
    // }
}

export default BaseRepo;