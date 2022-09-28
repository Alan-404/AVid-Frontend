import { User } from "../models/user"
export interface CreateUserDTO {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    gender: string,
    bdate: string,
    password: string,
    role: boolean,
    avatar: any
}

export interface ResponseCreateUserDTO{
    success: boolean,
    user: User
}