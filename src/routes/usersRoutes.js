const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const upload = require("../config/upload.js");
const apiKeyMiddleware = require("../config/apiKey");

router.use(apiKeyMiddleware);
/**
 * @swagger
 * tags:
 *   name: Usúarios
 *   description: Gerenciamento de usúarios
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Lista todos os usários
 *     tags: [Usúarios]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Filtro por nome
 *     responses:
 *       200:
 *         description: Lista de usúarios!
 */
router.get("/", usersController.getAllUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Busca usúario por ID
 *     tags: [Usúarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usúario encontrado!
 *       404:
 *         description: Usúario não encontrado!
 */
router.get("/:id", usersController.getUserById);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Cria um novo usúario
 *     tags: [Usúarios]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               house_id:
 *                 type: integer
 *               photo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Usúario criado!
 */
router.post("/", upload.single("photo"), usersController.createUser);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Atualiza um usúarios
 *     tags: [Usúarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               house_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Usúario atualizado!
 */
router.put("/:id", usersController.updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Deleta um usúario
 *     tags: [Usúarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usúario deletado!
 */
router.delete("/:id", usersController.deleteUser);

module.exports = router;
