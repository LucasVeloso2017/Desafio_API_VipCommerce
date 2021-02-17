import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CreateProductsService from '@modules/products/services/CreateProductsService';
import FindByIdService from '@modules/products/services/FindByIdService';
import FindAllProductsService from '@modules/products/services/FindAllProductsService';
import DeleteByIdService from '@modules/products/services/DeleteByidService';
import PutProductService from '@modules/products/services/PutProductService';

export default class ClientController{
    
    public async store(request: Request, response: Response): Promise<Response> {
        const {nome,tamanho,valor,fabricacao} = request.body

        const containerProduct = container.resolve(CreateProductsService)
        
        const product = await containerProduct.execute({
            nome,tamanho,valor,fabricacao
        })

        return response.json(product)
        
    }

    public async show(request:Request,response:Response):Promise<Response>{
        const { id } = request.params
        
        const containerProduct = container.resolve(FindByIdService)

        const product = await containerProduct.execute({
            id
        })

        return response.json(product)
    }

    public async index(request: Request, response: Response): Promise<Response> {
        
        const containerProduct = container.resolve(FindAllProductsService)

        const product = await containerProduct.execute()

        return response.json(classToClass(product))
    }

    public async destroy(request:Request,response:Response):Promise<Response>{
        const { id } = request.params

        const containerProduct = container.resolve(DeleteByIdService)

        const product = await containerProduct.execute({
            id
        })

        return response.json(product)
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const {nome,tamanho,valor,fabricacao} = request.body

        const containerProduct = container.resolve(PutProductService)

        const product = await containerProduct.execute({
            id,nome,tamanho,valor,fabricacao
        })

        return response.json(product)
    }
}