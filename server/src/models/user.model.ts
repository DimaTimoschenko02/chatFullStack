import mongoose, { Document, Model, model, Schema } from "mongoose";
import bcrypt from "bcrypt";
export interface IUser extends mongoose.Document {
  name: string;
  password: string;
  email: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}
const userSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avatar:{
      type:String,
      default:"none"
    }
  },
  {
    timestamps: true,
  }
);

userSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  const user = this as IUser;

  return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
};
const User = mongoose.model<IUser>("User", userSchema);

export default User;
