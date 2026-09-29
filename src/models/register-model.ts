type email = string

export interface RegisterModel{
  name: string,
  cpf: number,
  email: email,
  telephone: number,
  city: string,
  uf: string,
}