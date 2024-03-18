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
        const { email, old_password } = req.body;

        const user = await User.findByPk(req.user_id);

        if (email !== user.email) {
            const userExists = await User.findOne({
                where: { email },
            });

            if (userExists) {
                return res
                    .status(400)
                    .json({ erro: "usuario com e-mail já cadastrado." });
            }
        }

        if (old_password && !(await user.checkPassword(old_password))) {
            return res.status(401).json({ error: "senha incorreta." });
        }

        const { id, name } = await user.update(req.body);

        return res.json({ id, name, email });
    }

    async show(req, res) {
        const { email } = req.body;

        const user = await User.findOne({ email: email });

        return res.json(user);
    }

    async destroy(req, res) {
        const user = await User.findByPk(req.user_id);

        await user.destroy();

        return res.status(204).send();
    }
}

export default new UserController();
