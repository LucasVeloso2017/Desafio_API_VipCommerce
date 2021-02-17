
import ICreateProdudctDTO from '@modules/products/dtos/ICreateProductDTO'
import IProductsRepository from '@modules/products/repositories/IProductsRepository'
import {getRepository,Repository,} from 'typeorm'
import Products from '../entities/Products'

export default class ProductRepository implements IProductsRepository{

    private productsRepository:Repository<Products>
    
    constructor(){
        this.productsRepository = getRepository(Products)
    }

    public async create({nome,tamanho,valor,fabricacao}:ICreateProdudctDTO):Promise<Products>{
        const data = {nome,tamanho,valor,fabricacao}
        const product = this.productsRepository.create(data)
        
        await this.productsRepository.save(product)
        
        return product
    }

    public async save(product:Products):Promise<Products>{
        return this.productsRepository.save(product)
    }

    public async findById(id:string):Promise<Products | undefined>{

        const product = await this.productsRepository.findOne(id)
        return product
    }

    public async findAll():Promise<Products[]>{
        const Products = await this.productsRepository.find()
        return Products
    }

    public async deleteById(id:string):Promise<Products | undefined>{
        const product = await this.productsRepository.findOne(id)
       
        if(product){
            await this.productsRepository.delete({id:product.id})
        }

        return product
    }
}