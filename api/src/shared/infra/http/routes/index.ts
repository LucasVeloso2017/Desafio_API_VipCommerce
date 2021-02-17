import { Router } from 'express';

import ClientsRoutes from '@modules/users/infra/http/routes/clients.routes'
import ProductsRoutes from '@modules/products/infra/http/routes/products.routes'

const routes = Router()

routes.use('/clientes',ClientsRoutes)
routes.use('/produtos',ProductsRoutes)

export default routes