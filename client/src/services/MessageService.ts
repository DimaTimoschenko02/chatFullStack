import axios, { Axios } from "axios";

import HttpService from "./HttpService";

interface IMessage {
  from: string;
  to: string;
  message?: string;
}
class MessageService extends HttpService {
  url: string;
  fetchingService: Axios;
  constructor() {
    super();
    this.url = "message";
    this.fetchingService = axios;
  }

  async sendMessage(message: IMessage): Promise<IMessage> {
    const { data } = await this.create({
      url: this.url + "/add",
      data: { ...message },
    });
    console.log(data);
    return data;
  }
  async getAllMessages(messages:IMessage){
    const {data} = await this.getAll({
        url:this.url + '/get-messages'
    })
    console.log(data)
    return data
  }
}

const messageService = new MessageService();
export default messageService;
