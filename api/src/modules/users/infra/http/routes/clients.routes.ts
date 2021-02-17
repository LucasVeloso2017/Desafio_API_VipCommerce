import { Router } from "express";

import ClientController from '@modules/users/infra/http/controllers/ClientController'
const clientController = new ClientController()

const clientsRoutes = Router()

clientsRoutes.get('/',clientController.index)
clientsRoutes.get('/:id',clientController.show)
clientsRoutes.post('/',clientController.store)
clientsRoutes.delete('/:id',clientController.destroy)
clientsRoutes.put('/:id',clientController.update)


export default clientsRoutes