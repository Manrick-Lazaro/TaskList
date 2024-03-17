import User from "../models/user";

class UserController {
    async store(req, res) {
        const userFindOne = await User.findOne({
            email: req.body.email,
        });

        if (userFindOne) {
            return res
                .status(400)
                .json({ erro: "usuario com este e-mail já existe." });
        }

        const { id, name, email } = User.create(req.body);

        return res.status(200).json({ id, name, email });
    }
}

export default new UserController();
