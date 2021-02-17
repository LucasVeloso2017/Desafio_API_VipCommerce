import { container } from 'tsyringe'

import ClientsRepository from '@modules/users/infra/typeorm/repositories/ClientsRepository';
import  IClientsRepository  from '@modules/users/repositories/IClientsRepository';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ProductRepository from '@modules/products/infra/typeorm/repositories/ProductsRepository';

container.registerSingleton<IClientsRepository>(
    'ClientsRepository',ClientsRepository
)

container.registerSingleton<IProductsRepository>(
    'ProductsRepository',ProductRepository
)