import mongoose, { Document, Model, model, Schema } from "mongoose";
import { IMessage } from "../types/message.types";


const messageSchema: Schema = new Schema(
  {
    message:{
        type:String,
        required:true
    },
    
    from:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    to:{
      type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model<IMessage>("Message", messageSchema);

export default Message;
