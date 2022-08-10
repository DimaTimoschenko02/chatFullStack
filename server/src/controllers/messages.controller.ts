import MessageService from "../services/message.service";
import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { IMessage, IMessages } from "../types/message.types";


type MyRequest = Request<{}, {} , IMessage | IMessages>;
export class MessageController {
  constructor(private messageService: MessageService) {}
  async addMessage(req: MyRequest, res: Response) {
    const data =  await this.messageService.create(req.body as IMessage)
    return {status:201 , data}
  }
  async getAllMessages(req: MyRequest, res: Response) {
    const data =  await this.messageService.findAll(req.body)
    const messages = data.map(msg =>{
      return {
        fromSelf:msg.from === req.body.from,
        message:msg.message
      }
    })
    return{status:200 , data:messages}
  }
}
const messageController = new MessageController(new MessageService());
export default messageController;
