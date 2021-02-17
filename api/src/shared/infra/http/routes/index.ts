import { Router } from 'express';

import ClientsRoutes from '@modules/users/infra/http/routes/clients.routes'

const routes = Router()

routes.use('/clients',ClientsRoutes)

export default routes