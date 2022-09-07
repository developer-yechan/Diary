const Sequelize = require("sequelize");

module.exports = class Board extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        title: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: false,
        },
        content: {
          type: Sequelize.STRING(200),
          allowNull: false,
          unique: false,
        },
        password: {
          type: Sequelize.STRING(200),
          allowNull: false,
          unique: false,
        },
        weather: {
          type: Sequelize.STRING(100),
          allowNull: true,
          unique: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "board",
        tableName: "boards",
        paranoid: true,
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
      }
    );
  }
};
