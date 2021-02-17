import IClientsRepository from '@modules/users/repositories/IClientsRepository';
import AppError from "@shared/errors/appError";
import { inject, injectable } from "tsyringe";
import Products from '../infra/typeorm/entities/Products';
import IProductsRepository from '../repositories/IProductsRepository';

@injectable()
export default class FindAllProductsService{
    constructor(
        @inject("ProductsRepository")
        private productsRepository:IProductsRepository,
    ){}

    public async execute(): Promise<Products[]>{
       const products = await this.productsRepository.findAll()

       return products
    }
}