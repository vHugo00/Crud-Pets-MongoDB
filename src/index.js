const express = require("express")
const cliente_router = require("./routes/cliente_route.js")
const pet_router = require("./routes/pet_route.js")

const app = express()
const port = 5000

app.use(express.json())

app.use("/cliente", cliente_router)
app.use("/pet", pet_router)


app.listen(port, () => {
  console.log(`Server running in ${port} port`)
})