import { usersList } from './../repositories/register-user'

import { servicesUserList } from './../services/user-list-services'
import { IncomingMessage, ServerResponse } from 'http'
import { RegisterTransferModel } from '../models./resgister-transfer-model'
import { servicesResgisterUser } from '../services/user-resgister-services'

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
  response: ServerResponse
) => {
  const resgisterUser = String(request.url)
  const Content: RegisterTransferModel = await servicesResgisterUser(resgisterUser)

  response.writeHead(Content.StatusCode, DEFAULT_CONTENT)
  response.write(JSON.stringify(Content.body))

  response.end()
}
