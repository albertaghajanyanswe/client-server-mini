'use strict';
const { Op } = require('sequelize');
const {
    users
} = require('../models');

const data = [ { "id": 1, "firstName": "Tiger1", "lastName": "Nixon", "email": "tiger@mail.ru" }, { "id": 2, "firstName": "Tiger 2", "lastName": "Nixon 2", "email": "tiger2@mail.ru" }, { "id": 3, "firstName": "Tiger 3", "lastName": "Nixon 3", "email": "tiger3@mail.ru" } ];
module.exports.getUsers = async (req, res) => {
    return users.findAndCountAll()
        .then(({ count, rows }) => {
            console.log("rows = ", rows)
            return res.json({ count, data: data });
        })
        .catch((err) => {
            console.log("err = ", err)
            return res.status(500).json({ message: 'Error in get user list' });
        });
};

module.exports.getUser = async (req, res) => {
    return users.findPk(req.params.id)
        .then((user) => {
            return res.json(user);
        })
        .catch((err) => {
            return res.status(500).json({ message: 'Error in get user' });
        });
};

module.exports.create = async (req, res) => {
    const payload = { ...req.body };
    Users.findOne({ where: { email } })
        .then(async exist => {
            if (exist) {
                return res.status(409).json({ message: messages.validations.email.isNotUnique(exist.email) });
            }
            if (password) {
                user.passwordHash = await crypt.hash(password);
            }
            user.email = email;
            Users.create(user).then(async (createdUser) => {
                if (createdUser) {
                    return res.json({ user: createdUser, message: 'User has been created. Invitation email was been sent' });
                }
            }).catch(err => {
                return res.status(500).json({ message: 'Error in create user' });
            });
        })
        .catch(err => {
            return res.status(404).json({ message: 'validation error' });
        });
};