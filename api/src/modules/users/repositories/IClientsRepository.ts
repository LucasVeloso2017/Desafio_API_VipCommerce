import ICreateClientDTO from "../dtos/ICreateClientDTO";
import Clients from "../infra/typeorm/entities/Clients";

export default interface IClientsRepository{

    create(data:ICreateClientDTO):Promise<Clients>
    save(client:Clients):Promise<Clients>
    findById(id:string):Promise<Clients | undefined>
    findByEmail(email:string):Promise<Clients | undefined>
    findAll():Promise<Clients[]>
    deleteById(id:string):Promise<Clients | undefined>
}