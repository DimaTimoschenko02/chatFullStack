import UserService from "../services/user.service";
import { NextFunction, Request, Response } from "express";
import { sign } from "../utils/jwt.utils";
import { omit } from "lodash";
import config from "config";
import bcrypt from 'bcrypt'
export class UserController {
  expiresIn: string;
  constructor(private userService: UserService) {
    this.expiresIn = config.get("jwtExpiration");
  }

  async signup(req: Request, _: Response) {
    const hashPassword = bcrypt.hashSync(req.body.password, 5);
 
    const user = await this.userService.createUser({...req.body , password:hashPassword});
    const data = omit(user.toJSON(), "password");
    const token = sign(data, { expiresIn: this.expiresIn });
    return { status: 201, data: { data, token } };
  }

  async login(req: Request, _: Response) {
    const user = await this.userService.login(req.body.email);
    const data = omit(user!.toJSON(), "password");
    const token = sign(data, { expiresIn: this.expiresIn });
    return { status: 201, data: { data, token } };
  }
  async getContacts(req:Request , res:Response){
    const userId = req.app.get('user')._id
    const users = await this.userService.findAll(userId)
    return {status : 200 , data: users}
  }

  async getUser(req:Request , res:Response){
    const email = req.app.get('user').email
    const user = await this.userService.findUser(email)
    const data = omit(user.toJSON(), "password");
    return {status:200 , data}
  }
}
const userController = new UserController(new UserService());
export default userController;
