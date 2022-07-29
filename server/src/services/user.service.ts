import { ICreateUser, ILoginUser } from "../types/user.types";
import User from "../models/user.model";
export default class UserService {
  constructor() {}
  async createUser(data: ICreateUser) {
    return await User.create(data);
  }

  async findUser(email: string) {
    return await User.findOne({ email });
  }

  async login(email: ILoginUser) {
    return await User.findOne({ email });
  }
  async findAll(id: string) {
    return await User.find({ _id: { $ne: id } }).select([
      "email",
      "name",
      "_id",
      "avatar",
    ]);
  }
}
