module.exports = {
    dialect: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "Tasklist",
    define: {
        timestamps: true,
        underscored: true, // nome tabele user_id
        underscoredAll: true, // nome relacionamento
    },
};
