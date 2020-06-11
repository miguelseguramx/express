const express = require('express')
const path = require('path')
const productsRouter = require('./routes/views/products')
const productsApiRouter = require('./routes/api/products')

// App
const app = express()

// Middlewares Globales
app.use(express.json());

// Static Files
app.use('/static', express.static(path.join(__dirname, 'public')))

// Views engine
app.set('views', path.join(__dirname, 'views'))
app.set("view engine", "pug")

// Routes
app.use('/products', productsRouter)
app.use('/api/products', productsApiRouter)

// Redirect /
app.get('/', (req, res) => {
  res.redirect('/products')
})

// Server
const server = app.listen(8000, '0.0.0.0',  () => {
  console.log(`Server Running on ${server.address().address}:${server.address().port}`);
})
