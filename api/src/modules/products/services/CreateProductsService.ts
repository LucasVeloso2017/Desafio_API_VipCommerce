import IClientsRepository from '@modules/users/repositories/IClientsRepository';
import AppError from "@shared/errors/appError";
import { inject, injectable } from "tsyringe";
import Products from '../infra/typeorm/entities/Products';
import IProductsRepository from '../repositories/IProductsRepository';

interface Request{
    nome:string
    tamanho:string
    valor:string
    fabricacao:string
}

@injectable()
export default class CreateProductsService{
    constructor(
        @inject("ProductsRepository")
        private productsRepository:IProductsRepository,
    ){}

    public async execute({nome,tamanho,valor,fabricacao}:Request): Promise<Products | undefined>{
                
        const product = this.productsRepository.create({
            nome,tamanho,valor,fabricacao
        })
        
        return product
    }
}