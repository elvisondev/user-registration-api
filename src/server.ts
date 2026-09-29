import * as http from 'http'
import { app } from './app'

// * INICIA O SERVIDOR NA PORTA CONFIGURADA
const port = process.env.PORT

// * CRIA O SERVIDOR HTTP
const server = http.createServer(app)
server.listen(port, () => {
  console.log(`Servidor iniciado na ${port}`)
})
