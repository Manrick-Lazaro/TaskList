import { Router } from "express";

import User from "./app/models/User";

const routes = new Router();

routes.get("/teste", async (req, res) => {
    const user = await User.create({
        name: "manrick_teste",
        email: "teste@Teste.com",
        hash_password: "1598785",
    });

    return res.json(user);
});

export default routes;
