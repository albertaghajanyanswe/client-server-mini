module.exports = (sequelize, DataTypes) => {
    const fields = {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        firstName: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: 'first_name'
        },
        lastName: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: 'last_name'
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'email'
        },
        passwordHash: {
          type: DataTypes.STRING,
          allowNull: true,
          validate: {
              notEmpty: true
          },
          field: 'password_hash'
        },
        lastLogin: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'last_login'
        },
        password: {
            type: DataTypes.VIRTUAL,
            validate: {
                notEmpty: true
            }
        },
        role: {
          type: DataTypes.ENUM('admin', 'user'),
          validate: {
              notEmpty: true
          }
        },

    };

    const definition = {
        tableName: 'users',
        indexes: [
            {
                unique: true,
                fields: ['email']
            }
        ],
        defaultScope: {
            where: { },
            attributes: { exclude: ['passwordHash', 'password'] },
        },
        timestamps: true
    };

    const users = sequelize.define('users', fields, definition);
    return users;
};