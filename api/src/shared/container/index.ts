import { container } from 'tsyringe'

import ClientsRepository from '@modules/users/infra/typeorm/repositories/ClientsRepository';
import  IClientsRepository  from '@modules/users/repositories/IClientsRepository';

container.registerSingleton<IClientsRepository>(
    'ClientsRepository',ClientsRepository
)