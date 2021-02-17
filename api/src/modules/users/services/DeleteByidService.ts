import IClientsRepository from '@modules/users/repositories/IClientsRepository';
import AppError from "@shared/errors/appError";
import { inject, injectable } from "tsyringe";
import Clients from '../infra/typeorm/entities/Clients';

interface Request{
   id:string
}

@injectable()
export default class DeleteByIdService{
    constructor(
        @inject("ClientsRepository")
        private clientsRepository:IClientsRepository,
    ){}

    public async execute({id}:Request): Promise<void>{
        const client = await this.clientsRepository.findById(id)

        if(!client){
            throw new AppError("this user Not exists")
        }

        await this.clientsRepository.deleteById(client.id)
    }
}