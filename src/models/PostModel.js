const pool = require("../config/database");

const getAllPosts = async () => {
    const result = await pool.query(`SELECT posts.*, users.name AS users_name 
        FROM posts
        LEFT JOIN users ON posts.user_id = users.id`);
    return result.rows
}

const getPostById = async (id) => {
    const result = await pool.query(
      `SELECT posts.*, users.name AS user_name
       FROM posts
       LEFT JOIN users ON posts.user_id = users.id
       WHERE posts.id = $1`, [id]
    );
    return result.rows;
  };
  

const createPost = async (title, content, user_id) => {
    const result = await pool.query(`INSERT INTO posts (title, content, user_id) VALUES ($1, $2, $3) RETURNING *`, [title, content, user_id])
    return result.rows[0]
}

const updatePost = async (id, title, content) => {
    const result = await pool.query(
        `UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *`,
        [title, content, id]
    );
    return result.rows[0];
};

const deletePost = async (id) => {
    const result = await pool.query(`DELETE FROM posts WHERE id = $1 RETURNING *`, [id])
    if (result.rowCount === 0) {
        return { error: "Post não encontrado!" };
    }
    return { message: "Post deletado com sucesso!" };
}

module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost };