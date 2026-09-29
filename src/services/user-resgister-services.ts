import { usersList } from '../repositories/register-user';
import { StatusCode } from './../ultils/status-code';
import {RegisterTransferModel} from "../models/resgister-transfer-model"

export const servicesResgisterUser = async (name: string):
Promise<RegisterTransferModel> => {
  // * DEFINE O FORMATO PADRÃO DA RESPOSTA
  let formatResponse: RegisterTransferModel = {
    StatusCode: 0,
    body: []
  }
  // * BUSCA USUÁRIOS PELO NOME INFORMADO
  const base = await usersList(name)
  // * MONTA A RESPOSTA COM BASE NO RESULTADO DA BUSCA
  formatResponse = {
    StatusCode: base.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
    body: base
  }
  
  return formatResponse

}