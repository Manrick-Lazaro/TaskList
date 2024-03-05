module.exports = {
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "admin",
    database: "Tasklist",
    define: {
        timestamps: true,
        underscored: true, // nome tabele user_id
        underscoredAll: true, // nome relacionamento
    },
};
