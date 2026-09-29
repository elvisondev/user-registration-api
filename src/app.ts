import * as http from 'http'

import {
  DEFAULT_CONTENT,
  getListUser,
  getUserResgister
} from './controllers/controller'
import { HttpMethod } from './ultils/http-methods'
import { StatusCode } from './ultils/status-code'
import { Routes } from './routes/routes';

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse,
) => {
  
  // * VALIDA A URL DA REQUISIÇÃO
  if (!request || !request.url) {
    response.writeHead(StatusCode.INTERNAL_SERVER_ERROR, DEFAULT_CONTENT)
    response.write(
      JSON.stringify({ erro: 'Erro interno: Requisição inválida.' })
    )

    return
  }
  // * CRIA A URL BASE DA REQUISIÇÃO 
  const baseURL = new URL(request.url, `http://${request.headers.host}`)

  // * ROTA PARA LISTAR TODOS OS USUÁRIOS
  if (request.method === HttpMethod.GET && baseURL.pathname === Routes.USER) {
    await getListUser(request, response)
  }

  // * ROTA PARA BUSCAR USUÁRIOS POR NOME
  if (request.method === HttpMethod.GET && baseURL.pathname === Routes.NAME) {
    const UserName = baseURL.searchParams.get('name') ?? ""
    let getUser = UserName
    return getUserResgister(request, response, getUser)
  }
}
