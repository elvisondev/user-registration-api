import { servicesUserList } from './../services/user-list-services'
import { IncomingMessage, ServerResponse } from 'http'
import { RegisterTransferModel } from '../models./resgister-transfer-model'
import { servicesResgisterUser } from '../services/user-resgister-services'
import { StatusCode } from '../ultils/status-code'

export const DEFAULT_CONTENT = { 'Content-Type': 'application/json' }

export const getListUser = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const Content: RegisterTransferModel = await servicesUserList()

  response.writeHead(Content.StatusCode, DEFAULT_CONTENT)
  response.write(JSON.stringify(Content.body))

  response.end()
}

export const getUserResgister = async (
  request: IncomingMessage,
  response: ServerResponse,
  getUser: string
) => {
  

  if (getUser === '') {
    response.writeHead(StatusCode.BAD_REQUEST, DEFAULT_CONTENT)
    return response.end(
      JSON.stringify({ error: 'O parâmetro name é obrigatório.' })
    )
  }

  const Content: RegisterTransferModel = await servicesResgisterUser(getUser)
  response.writeHead(Content.StatusCode, DEFAULT_CONTENT)
  response.write(JSON.stringify(Content.body))

  response.end()
}
