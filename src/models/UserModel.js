const pool = require("../config/database");
const { get } = require("../routes/postRoutes");

const getAllUsers = async (name) => {
    //Sem nome
    if (!name) {
        // Se não houver nome, retorna todos os bruxos
        const result = await pool.query(
            "SELECT * FROM users"
        );
        return result.rows;
    } else {
        // Se tiver, faça o filtro.
        const result = await pool.query(
            "SELECT * FROM users WHERE name ILIKE $1", [`%${name}%`]
        );
        return result.rows;
    }
};

const getUsersById = async (id) => {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
};

const createUsers = async (name, email, password) => {
    const result = await pool.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *", [name, email, password]);
    return result.rows[0];
};

const updateUsers = async (id, data) => {
    const { name, email, password } = data;
    const result = await pool.query("UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *", [name, email, password, id]);
    return result.rows[0];
};

const deleteUsers = async (id) => {
    const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Usuário não encontrado!" };
    }
    return { message: "Usuário deletado com sucesso!" };
};

module.exports = { getAllUsers, getUsersById, deleteUsers, updateUsers, createUsers };