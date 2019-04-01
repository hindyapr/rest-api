const model = require('../models');
const User = model.User;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


class UserController {
    static create(req, res) {
        //Untuk menambahkan user
        console.log(req.body);
        User
            .create({
                username: req.body.username,
                password: bcrypt.hashSync(req.body.password, 10),
                email: req.body.email,
                role: req.body.role
            })
            .then(data => {
                res
                    .status(201)
                    .json(data);
            })
            .catch(err => {
                res.status(500).json(err);
            })
    }

    static readAll(req, res) {
        //Untuk menampilkan list data user
        User
            .findAll()
            .then(users => {
                res
                    .json(users);
            })
            .catch(err => {
                res
                    .status(500)
                    .json(err);
            })

    }

    static readById(req, res) {
        //Untuk menampilkan data user dengan id tertentu
        let id = Number(req.params.id);
        User
            .findByPk(id)
            .then(user => {
                res
                    .json(user);
            })
            .catch(err => {
                res
                    .status(500)
                    .json(err);
            })
    }

    static update(req, res) {
        //Untuk memperbaharui data user dengan id tertentu
        let id = Number(req.params.id);
        User
            .update({
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                role: req.body.role
            }, {
                where: {
                    id: id
                }
            })
            .then(data => {
                res
                    .json(data);
            })
            .catch(err => {
                res
                    .status(500)
                    .json(err);
            })
    }

    static delete(req, res) {
        //Untuk menghapus data user dengan id tertentu
        let id = Number(req.params.id);
        User.destroy({
                where: {
                    id: id
                }
            })
            .then(result => {
                res
                    .json(result);
            })
            .catch(err => {
                res
                    .status(500)
                    .json(err);
            })

    }

    static signIn(req, res) {
        User
            .findOne({
                where: {
                    username: req.body.username
                }
            })
            .then(data => {

                if (data) {
                    if (bcrypt.compareSync(req.body.password, data.password)) {
                        const token = jwt.sign({
                            UserId: data.id,
                            role: data.role
                        }, process.env.SECRET);

                        res
                            .json({
                                message: 'Berhasil login',
                                token
                            })
                    } else {
                        res
                            .status(401)
                            .json({
                                message: 'password salah'
                            });
                    }
                } else {
                    res
                        .status(401)
                        .json({
                            message: 'user tidak ditemukan'
                        });
                };
            })
            .catch(err => {
                res
                    .status(500)
                    .json(err);
            })
    }
}

module.exports = UserController;