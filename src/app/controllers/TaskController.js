import Task from "../models/Task";
import * as Yup from "yup";

class TaskController {
    async store(req, res) {
        const schema = Yup.object().shape({
            task: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Falha ao cadastrar." });
        }

        const { task } = req.body;

        const task_created = await Task.create({
            task,
            user_id: req.user_id,
        });

        return res.json(task_created);
    }

    async update(req, res) {
        const { task_id } = req.params;

        const task = await Task.findByPk(task_id);

        if (!task) {
            return res.status(400).json({ error: "Tarefa não existe." });
        }

        await task.update(req.body);

        return res.json(task);
    }

    async delete(req, res) {
        const task = await Task.findByPk(req.params.task_id);

        if (!task) {
            return res.status(400).json({ error: "Tarefa não existe." });
        }

        if (task.user_id !== req.user_id) {
            return res
                .status(401)
                .json({ error: "Requisição não autorizada." });
        }

        await task.destroy();

        return res.send();
    }

    async index(req, res) {
        const tasks = await Task.findAll({
            where: { user_id: req.user_id, check: false },
        });

        return res.status(200).json(tasks);
    }
}

export default new TaskController();
