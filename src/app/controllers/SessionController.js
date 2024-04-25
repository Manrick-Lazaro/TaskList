import jwt from "jsonwebtoken";
import User from "../models/User";
import auth from "../../config/auth";

class SessionController {
	async store(req, res) {
		const { email, password } = req.body;

		const user = await User.findOne({ where: { email } });

		// verificação por email
		if (!user) {
			return res
				.status(401)
				.json({ error: "Não existe nenhum usuario com esse email." });
		}

		// verificação por senha
		if (!(await user.checkPassword(password))) {
			return res.status(401).json({ error: "senha inválida" });
		}

		const { id, name } = user;

		return res.json({
			user: {
				id,
				name,
				email,
			},
			token: jwt.sign({ id }, auth.secret, {
				expiresIn: auth.expiresIn,
			}),
		});
	}
}

export default new SessionController();
