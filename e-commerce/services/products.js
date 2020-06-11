const productsMocks = require('../utils/mocks/products')

class ProductsService {
  constructor() {

  }

  getProducts() {
    return Promise.resolve(productsMocks)
  }
  
  getProduct() {
    return Promise.resolve(productsMocks)
  }
  
  createProduct({ product }) {
    return Promise.resolve(productsMocks)
  }

  updateAllProduct({ productId, product }) {
    return Promise.resolve(productsMocks)
  }

  updateProduct({ productId, product }) {
    return Promise.resolve(productsMocks)
  }

  deleteProduct({ productId }) {
    return Promise.resolve(productsMocks)
  }
}

module.exports = ProductsService
