import path from 'path'
import fs from 'fs'

import { RegisterModel } from './../models/register-model'
import { Path } from './../routes/Paths'

const pathResgister = path.join(__dirname, Path.RESGISTER_USER)

export const usersList = async (name?: string): Promise<RegisterModel[]> => {
  const language = 'utf-8'

  const rawRegister = fs.readFileSync(pathResgister, language)
  let jsonFile = JSON.parse(rawRegister)

  if (name) {
    jsonFile = jsonFile.filter((user: RegisterModel) => user.name.toLowerCase().includes(name.toLowerCase()))
  }

  return jsonFile
}
