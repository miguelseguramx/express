const express = require('express')
const router = express.Router()
const ProductService = require('../../services/products')

const productService = new ProductService()

router.get('/', async (req, res, next) => {
  const { query } = req.query

  try {
    const products = await productService.getProducts({ query })
  
    res.status(200).json({
      data: products,
      message: 'Products Listed'
    })
  } catch (error) {
    next(error)
  }
})

router.get('/:productId', async (req, res, next) => {
  const { productId } = req.params

  try {
    const product = await productService.getProduct({ productId })
  
    res.status(200).json({
      data: product,
      message: 'Product Retrive'
    })
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  const { body: product } = req

  try {
    const newProduct = await productService.createProduct({ product })

    res.status(201).json({
      data: newProduct,
      message: 'Product Created'
    })
  } catch (error) {
    next(error)
  }
})

router.put('/:productId', async (req, res, next) => {
  const { productId } = req.params
  const { body: product } = req
  
  try {
    const productUpdated = await productService.updateAllProduct({ productId, product })
  
    res.status(200).json({
      data: productUpdated,
      message: 'Products Listed'
    })
  } catch (error) {
    next(error)
  }
})

router.patch('/:productId', async (req, res, next) => {
  const { productId } = req.params
  const { body: product } = req
  
  try {
    const productPartialUpdated = await productService.updateProduct({ productId, product })

    res.status(200).json({
      data: productPartialUpdated,
      message: 'Products Listed'
    })
  } catch (error) {
    next(error)
  }
})

router.delete('/:productId', async (req, res, next) => {
  const { productId } = req.params
  
  try {
    const productDeleted = await productService.deleteProduct({ productId })
  
    res.status(200).json({
      data: productDeleted,
      message: 'Products Listed'
    })
  } catch (error) {
    next(error)
  }
})

module.exports = router
