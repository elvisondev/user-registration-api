import { usersList } from '../repositories/register-user';
import { StatusCode } from './../ultils/status-code';
import {RegisterTransferModel} from "../models/resgister-transfer-model"

export const servicesResgisterUser = async (name: string):
Promise<RegisterTransferModel> => {

  let formatResponse: RegisterTransferModel = {
    StatusCode: 0,
    body: []
  }

  const base = await usersList(name)

  formatResponse = {
    StatusCode: base.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
    body: base
  }
  
  return formatResponse

}