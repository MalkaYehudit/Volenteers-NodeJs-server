import repo from '../repositories/HelpRequestRepo.js';
import BaseService from './BaseService.js';

class HelpRequestService extends BaseService {
    constructor(repo) {
        super(repo);
    }

    async update(id, data){
        try{
            let h =  await this.repo.update(id, data);
            //console.log(h);
            return h;
        }
        
        catch(errors){
            console.log(errors);
            throw new Error("unable to update request.");
        }
    }
}

export default new HelpRequestService(repo);