import IClientsRepository from '@modules/users/repositories/IClientsRepository';
import AppError from "@shared/errors/appError";
import { ta } from 'date-fns/locale';
import { inject, injectable } from "tsyringe";
import Products from '../infra/typeorm/entities/Products';
import IProductsRepository from '../repositories/IProductsRepository';

interface Request{
    id:string
    nome:string
    tamanho:string
    valor:string
    fabricacao:string
}

@injectable()
export default class PutClientService{
    constructor(
        @inject("ProductsRepository")
        private productsRepository:IProductsRepository,
    ){}

    public async execute({id,nome,tamanho,valor,fabricacao}:Request): Promise<Products | undefined>{
        const product = await this.productsRepository.findById(id)
        
        if(!product){
            throw new AppError('This product already exists')
        }

        product.nome  = nome
        product.tamanho = tamanho
        product.valor   = valor
        product.fabricacao  = fabricacao 

        const update = await this.productsRepository.save(product)

        return update
    }   
}