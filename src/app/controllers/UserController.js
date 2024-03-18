import User from "../models/User";

class UserController {
    async store(req, res) {
        const userExists = await User.findOne({
            where: { email: req.body.email },
        });

        if (userExists) {
            return res
                .status(400)
                .json({ erro: "usuario com e-mail já cadastrado." });
        }

        const { id, name, email } = await User.create(req.body);

        return res.status(200).json({ id, name, email });
    }

    async update(req, res) {
        return res.json({ ok: true });
    }
}

export default new UserController();
