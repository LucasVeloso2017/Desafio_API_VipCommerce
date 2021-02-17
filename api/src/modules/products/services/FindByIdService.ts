import AppError from "@shared/errors/appError";
import { inject, injectable } from "tsyringe";
import Products from '../infra/typeorm/entities/Products';
import IProductsRepository from '../repositories/IProductsRepository';

interface Request{
   id:string
}

@injectable()
export default class FindByIdService{
    constructor(
        @inject("ProductsRepository")
        private productsRepository:IProductsRepository,
    ){}

    public async execute({id}:Request): Promise<Products | undefined>{
        const product = await this.productsRepository.findById(id)

        if(!product){
            throw new AppError("this user Not exists")
        }
        
        return product
    }
}