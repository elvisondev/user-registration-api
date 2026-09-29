import { usersList } from '../repositories/register-user';
import { StatusCode } from './../ultils/status-code';
import {RegisterTransferModel} from "../models/resgister-transfer-model"

export const servicesUserList = async ():Promise<RegisterTransferModel> => {

  let formatResponse: RegisterTransferModel = {
    StatusCode: 0,
    body: []
  }

  const base = await usersList()

  formatResponse = {
    StatusCode: base.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
    body: base
  }

  return formatResponse


}