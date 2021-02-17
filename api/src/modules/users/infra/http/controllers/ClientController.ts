import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CreateClientsService from '@modules/users/services/CreateClientsService';
import FindByIdService from '@modules/users/services/FindByIdService';
import FindAllClientsService from '@modules/users/services/FindAllClientsService';
import DeleteByIdService from '@modules/users/services/DeleteByidService';
import PutClientService from '@modules/users/services/PutClientService';

export default class ClientController{
    
    public async store(request: Request, response: Response): Promise<Response> {
        const {nome,email,cpf,sexo} = request.body

        const containerClient = container.resolve(CreateClientsService)
        
        const client = await containerClient.execute({
            nome,email,cpf,sexo
        })

        return response.json(client)
        
    }

    public async show(request:Request,response:Response):Promise<Response>{
        const { id } = request.params
        
        const containerClient = container.resolve(FindByIdService)

        const client = await containerClient.execute({
            id
        })

        return response.json(client)
    }

    public async index(request: Request, response: Response): Promise<Response> {
        
        const containerClient = container.resolve(FindAllClientsService)

        const client = await containerClient.execute()

        return response.json(classToClass(client))
    }

    public async destroy(request:Request,response:Response):Promise<Response>{
        const { id } = request.params

        const containerClient = container.resolve(DeleteByIdService)

        const client = await containerClient.execute({
            id
        })

        return response.json(client)
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const {nome,email,cpf,sexo} = request.body

        const containerClient = container.resolve(PutClientService)

        const client = await containerClient.execute({
            id,nome,email,cpf,sexo
        })

        return response.json(client)
    }
}