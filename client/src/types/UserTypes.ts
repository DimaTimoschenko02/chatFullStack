export interface ILoginUser{
    email:string,
    password:string
}

export interface ISignUser extends ILoginUser{
    confirmPassword?:string
    name:string
}

export interface IUser{
    name:string,
    email:string,
    avatar?:string,
    _id:string
}