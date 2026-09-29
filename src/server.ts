import * as http from 'http'
import { app } from './app';

const port = process.env.PORT

// Create an HTTP server
const server = http.createServer(app)
 
server.listen(port, () => {
  console.log(`Servidor iniciado na ${port}`)
})