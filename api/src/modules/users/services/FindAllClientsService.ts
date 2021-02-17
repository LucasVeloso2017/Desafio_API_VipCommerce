import IClientsRepository from '@modules/users/repositories/IClientsRepository';
import AppError from "@shared/errors/appError";
import { inject, injectable } from "tsyringe";
import Clients from '../infra/typeorm/entities/Clients';

@injectable()
export default class FindAllClientsService{
    constructor(
        @inject("ClientsRepository")
        private clientsRepository:IClientsRepository,
    ){}

    public async execute(): Promise<Clients[]>{
       const clients = await this.clientsRepository.findAll()

       return clients
    }
}