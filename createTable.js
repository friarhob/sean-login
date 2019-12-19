const Sequelize = require('sequelize');
const PATH_USERS_DB = 'db/users.db';
const sequelize = new Sequelize('sqlite:'+PATH_USERS_DB);

sequelize
    .authenticate()
    .then(() => {
        console.log("Connected to "+PATH_USERS_DB+" SQLite database");
    })
    .catch(err => {
        console.error(err);
    });

class User extends Sequelize.Model {}

User.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    salt: {
        type: Sequelize.STRING
    }
}, { sequelize, modelName: 'users' });


