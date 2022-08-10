import { Application } from "express";
// import todosRouter from "./api/todos.route";
import userRouter from "./api/user.route";
import messageRouter from './api/message.route'
class AppRouter {
    constructor(private app: Application) {}
    init() {
        this.app.get("/", (_req, res) => {
            res.send("API Running");
        });
        this.app.use("/api/message", messageRouter);
        this.app.use("/api/user", userRouter);
    }
}

export default AppRouter;