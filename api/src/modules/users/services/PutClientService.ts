import IClientsRepository from '@modules/users/repositories/IClientsRepository';
import AppError from "@shared/errors/appError";
import { inject, injectable } from "tsyringe";
import Clients from '../infra/typeorm/entities/Clients';

interface Request{
    id:string
    nome:string
    email:string
    cpf:string
    sexo:string
}

@injectable()
export default class PutClientService{
    constructor(
        @inject("ClientsRepository")
        private clientsRepository:IClientsRepository,
    ){}

    public async execute({id,nome,email,cpf,sexo}:Request): Promise<Clients | undefined>{
        const user = await this.clientsRepository.findById(id)
        
        if(!user){
            throw new AppError('This user already exists')
        }

        user.nome  = nome
        user.email = email
        user.cpf   = cpf
        user.sexo  = sexo 

        const update = await this.clientsRepository.save(user)

        return update
    }   
}