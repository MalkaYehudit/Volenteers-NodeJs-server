
import repo from '../repositories/VolunteersRepo.js';
import BaseService from './BaseService.js';
class VolunteersService extends BaseService {
    constructor(repo) {
        super(repo);
    }

    async insert(data){
        try{
            let vol = await this.repo.insert(data);
            return vol;
        }

        catch(errors){
            //console.log(errors);
            throw new Error("unable to add volunteer.")
        }
    }
}

export default new VolunteersService(repo);