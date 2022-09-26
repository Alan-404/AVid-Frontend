export interface LoginDTO{
    email: string,
    password: string
}

export interface ResponseLoginDTO{
    success: boolean,
    accessToken: string
}