"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "ht_county",
      {
        id: {
          type: Sequelize.CHAR(36),
          allowNull: false,
          defaultValue: Sequelize.literal("(uuid())"),
          primaryKey: true,
        },
        stateId: {
          type: Sequelize.CHAR(36),
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING(70),
          allowNull: false,
        },
        number: {
          type: Sequelize.BIGINT,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        deletedAt: {
          type: Sequelize.DATE,
          allowNull: true,
        },
      },
      {
        Sequelize,
        tableName: "ht_county",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id" }],
          },
          {
            name: "id_UNIQUE",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ht_county");
  },
};
