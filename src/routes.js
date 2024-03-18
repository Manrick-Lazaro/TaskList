import { Router } from "express";

import authMiddlewares from "./app/middlewares/auth";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";

const routes = new Router();

routes.post("/users", UserController.store);
routes.put("/users", authMiddlewares, UserController.update);
routes.get("/users", UserController.show);
routes.delete("/users", authMiddlewares, UserController.destroy);

routes.post("/sessions", SessionController.store);

export default routes;
