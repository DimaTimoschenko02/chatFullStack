import { ILoginUser, ISignUser, IUser } from "../types/UserTypes";
import { makeAutoObservable } from "mobx";
import userService from "../services/UserService";
export default class Store {
  user = {} as IUser;
  userContacts: IUser[] = [];
  isAuth: boolean = false;
  isLoading: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }

  setAuth(auth: boolean) {
    this.isAuth = auth;
  }

  setUser(user: IUser) {
    this.user = user;
  }
  setIsLoading(bool:boolean){
    this.isLoading = bool
  }
  async getUser(token: string) {
    try{
      this.setIsLoading(true)
      const user = await userService.getUser(token);
    //userService.getUser(token).then(user => this.setUser(user))
    this.setUser(user);
    return user
    }catch(err){
      console.log(err)
    }
    finally{
      this.setIsLoading(false)
    
    }
    
  }
  setUserContacts(contacts: IUser[]) {
    this.userContacts = contacts;
  }

  async login(data: ILoginUser) {
    const res = await userService.login(data);
    this.setAuth(true);
    this.setUser(res.user);
  }
  async signup(data: ISignUser) {
    const res = await userService.signup(data);
    this.setAuth(true);
    this.setUser(res.user);
  }

  async logout() {
    this.setUser({} as IUser);
    this.setAuth(false);
    this.userContacts = [] as IUser[];
    localStorage.removeItem("token");
  }

  async getContacts() {
    try {
      this.setIsLoading(true)
      const contacts = await userService.findUsers();
      this.setUserContacts(contacts);
      if (contacts.length) return contacts;
      return [] as IUser[];
    } catch (error) {
      console.log(error);
    } finally {
      this.setIsLoading(false)
    }
  }
}
