export interface User{
  email: string
  password: string
}

export interface Contact{
  _id?: string
  firstname: string
  lastname: string
  email: string
}

export interface Message{
  message: string
}
