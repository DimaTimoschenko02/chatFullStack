import Message from "../models/message.model";
import { IMessage, IMessages } from "../types/message.types";

export default class MessageService {
  constructor() {}
  async create(data:IMessage) {
    const {message,from , to} = data
    return await Message.create({message ,from , to})
  }

  async findAll(data:IMessages){
    const {from , to} = data
    return await Message.find<IMessage>({
      from , to
    }).sort({createdAt:1})
  }
}
