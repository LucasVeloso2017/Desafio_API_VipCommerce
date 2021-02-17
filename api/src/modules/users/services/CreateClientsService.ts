import IClientsRepository from '@modules/users/repositories/IClientsRepository';
import AppError from "@shared/errors/appError";
import { inject, injectable } from "tsyringe";
import Clients from '../infra/typeorm/entities/Clients';

interface Request{
    nome:string
    email:string
    cpf:string
    sexo:string
}

@injectable()
export default class CreateClientsService{
    constructor(
        @inject("ClientsRepository")
        private clientsRepository:IClientsRepository,
    ){}

    public async execute({nome,email,cpf,sexo}:Request): Promise<Clients | undefined>{
        const checkExistUser = await this.clientsRepository.findByEmail(email)
        
        if(checkExistUser){
            throw new AppError('This user already exists')
        }

        const client = this.clientsRepository.create({
            nome,email,cpf,sexo
        })
        
        return client
    }
}