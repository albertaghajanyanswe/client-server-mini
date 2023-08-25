'use strict';

const users = require('../controllers/users');

module.exports = (app) => {
    app.route('/users').get(users.getUsers);
    app.route('/user/:id').get(users.getUser);
};