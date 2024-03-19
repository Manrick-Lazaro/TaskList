import { Router } from "express";

import authMiddlewares from "./app/middlewares/auth";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import TaskController from "./app/controllers/TaskController";

const routes = new Router();

routes.post("/users", UserController.store);
routes.put("/users", authMiddlewares, UserController.update);
routes.get("/users", UserController.show);
routes.delete("/users", authMiddlewares, UserController.destroy);

routes.post("/sessions", SessionController.store);

routes.post("/tasks", authMiddlewares, TaskController.store);
routes.get("/tasks", authMiddlewares, TaskController.index);
routes.put("/tasks/:task_id", authMiddlewares, TaskController.update);
routes.delete("/tasks/:task_id", authMiddlewares, TaskController.delete);

export default routes;
