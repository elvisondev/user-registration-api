import * as http from 'http'

import {
  DEFAULT_CONTENT,
  getListUser,
  getUserResgister
} from './controllers/controller'
import { HttpMethod } from './ultils/http-methods'
import { StatusCode } from './ultils/status-code'
import { URLSearchParams } from 'url';

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse, 
  
) => {
  const USER = '/api/list'
  const NAME = '/api/name'

  if (!request || !request.url) {
    response.writeHead(StatusCode.INTERNAL_SERVER_ERROR, DEFAULT_CONTENT)
    response.write(
      JSON.stringify({ erro: 'Erro interno: Requisição inválida.' })
    )

    return
  }

  const baseURL = new URL(request.url, `http://${request.headers.host}`)

  //List USER
  if (request.method === HttpMethod.GET && baseURL.pathname === USER) {
    await getListUser(request, response)
  }

  //LISTA OS USUARIOS PELO NOME
  if (request.method === HttpMethod.GET && baseURL.pathname === NAME) {

    // TODO FAZER TRATAMENTO DE ERRO COMO STATUSCODE 400
    const UserName = baseURL.searchParams.get("name") ?? "";
    request.url = UserName
    return getUserResgister(request, response )

  }
}
 