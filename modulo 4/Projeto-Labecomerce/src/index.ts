import { app } from "./app"
import { createProduct } from "./endpoints/products/createProduct"
import { createUser } from "./endpoints/User/createUser"
import { getAllUsers } from "./endpoints/User/getAllUsers"

// aqui será onde vou chamar as funçoes ligadas as requisições as minhas rotas


app.get('/users',getAllUsers)
app.post('/users',createUser)

app.get('/products')
app.post('/products',createProduct)