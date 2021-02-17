import IClientsRepository from '@modules/users/repositories/IClientsRepository';
import AppError from "@shared/errors/appError";
import { inject, injectable } from "tsyringe";
import IProductsRepository from '../repositories/IProductsRepository';

interface Request{
   id:string
}

@injectable()
export default class DeleteByIdService{
    constructor(
        @inject("ProductsRepository")
        private productsRepository:IProductsRepository,
    ){}

    public async execute({id}:Request): Promise<void>{
        const client = await this.productsRepository.findById(id)

        if(!client){
            throw new AppError("this user Not exists")
        }

        await this.productsRepository.deleteById(client.id)
    }
}