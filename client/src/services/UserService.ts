

import axios, { Axios } from "axios";

import HttpService from "./HttpService";

import { ILoginUser, ISignUser, IUser } from "../types/UserTypes";
export interface IResponse{
  token:string,
  user:IUser
}
class UserService extends HttpService {
  url: string;
  fetchingService: Axios;
  constructor() {
    super();
    this.url = "user";
    this.fetchingService = axios;
  }


  async login(user: ILoginUser):Promise<IResponse> {
    const  {data}  = await this.create({
      url: this.url + "/login",
      data: { ...user },
    });

    // i m still dont realize if i need a user from back
    const { data:_user, token } = data;
    await this.saveToken(token)
    return {token , user:_user};
  }
  async signup(user: ISignUser):Promise<IResponse> {
    const { data } = await this.create({
      url: this.url + "/sign-up",
      data: { ...user },
    });
  
    const { data: _user, token } = data;
    await this.saveToken(token);
    return {token , user:_user}
  }

  async findUsers():Promise<IUser[]>{
    const {data} = await this.getAll({
      url:this.url + '/contacts'
    })

    return data
  }

  async getUser(token:string):Promise<IUser>{
    const {data} = await this.create({
      url:this.url + '/user' , data:{token}
    })
   
    return data
  }
 
}

const userService = new UserService();
export default userService;