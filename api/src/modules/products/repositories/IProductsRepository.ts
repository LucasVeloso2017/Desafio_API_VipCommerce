import ICreateProdudctDTO from "../dtos/ICreateProductDTO";
import Products from "../infra/typeorm/entities/Products";

export default interface IProductsRepository{

    create(data:ICreateProdudctDTO):Promise<Products>
    save(product:Products):Promise<Products>
    findById(id:string):Promise<Products | undefined>
    findAll():Promise<Products[]>
    deleteById(id:string):Promise<Products | undefined>
}