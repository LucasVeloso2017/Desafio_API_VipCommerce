import { Router } from "express";

import ProductController from '@modules/products/infra/http/controllers/ProductController'
const productController = new ProductController()

const productRoutes = Router()

productRoutes.get('/',productController.index)
productRoutes.get('/:id',productController.show)
productRoutes.post('/',productController.store)
productRoutes.delete('/:id',productController.destroy)
productRoutes.put('/:id',productController.update)


export default productRoutes