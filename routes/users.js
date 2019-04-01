const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');
const { authorizationAdmin, authorizationAdminOrAuthenticUser } = require('../middlewares/middlewares');

//Untuk menampilkan semua info user
router.get('/', authorizationAdmin, controller.readAll);

//Untuk menampilkan data user berdasarkan id
router.get('/:id', authorizationAdminOrAuthenticUser, controller.readById);

//Untuk menambahkan data user
router.post('/', authorizationAdmin, controller.create);

//Untuk memperbaharui data user
router.put('/:id', authorizationAdminOrAuthenticUser, controller.update);

//Untuk menghapus data user
router.delete('/:id', authorizationAdminOrAuthenticUser, controller.delete);






module.exports = router