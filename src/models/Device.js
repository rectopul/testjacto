'use strict';

const { DataTypes, Model, Sequelize } = require('sequelize')

class Device extends Model {
  static init(sequelize) {
    super.init(
        {
            name: {
                type: DataTypes.TEXT,
                validate: {
                    notEmpty: {
                        msg: `The name field cannot be empty`,
                    },
                },
            },
            phone: {
                type: DataTypes.TEXT,
                validate: {
                    notEmpty: {
                        msg: `The phone field cannot be empty`,
                    },
                },
            },
            lastNumber: {
                type: DataTypes.TEXT,
                validate: {
                    notEmpty: {
                        msg: `The lastNumber field cannot be empty`,
                    },
                },
            },
        },
        {
            sequelize,
        }
    )
  }

  static associate(models) {
      //Relations
      this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client' })
  }
}

module.exports = Device