import IClientsRepository from '@modules/users/repositories/IClientsRepository';
import AppError from "@shared/errors/appError";
import { inject, injectable } from "tsyringe";
import Clients from '../infra/typeorm/entities/Clients';

interface Request{
   id:string
}

@injectable()
export default class FindByIdService{
    constructor(
        @inject("ClientsRepository")
        private clientsRepository:IClientsRepository,
    ){}

    public async execute({id}:Request): Promise<Clients | undefined>{
        console.log('service',id)
        const client = await this.clientsRepository.findById(id)

        if(!client){
            throw new AppError("this user Not exists")
        }
        
        return client
    }
}