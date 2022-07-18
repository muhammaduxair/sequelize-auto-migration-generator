
            'use strict';
            
            module.exports = {
                async up (queryInterface, Sequelize) {
                    await queryInterface.createTable('ht_school', {
    id: {
      type: Sequelize.CHAR(36),
      allowNull: false,
      defaultValue: Sequelize.literal('(uuid())'),
      primaryKey: true
    },
    stateId: {
      type: Sequelize.CHAR(36),
      allowNull: false,
      references: {
        model: 'ht_state',
        key: 'id'
      }
    },
    cityId: {
      type: Sequelize.CHAR(36),
      allowNull: false,
      references: {
        model: 'ht_city',
        key: 'id'
      }
    },
    countyId: {
      type: Sequelize.CHAR(36),
      allowNull: false,
      references: {
        model: 'ht_county',
        key: 'id'
      }
    },
    name: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    address: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    address2: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    address3: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    zipCode: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    type: {
      type: Sequelize.ENUM('Private','Public'),
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: true
    },
    deletedAt: {
      type: Sequelize.DATE,
      allowNull: true
    }
  }, {
    Sequelize,
    tableName: 'ht_school',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "stateId",
        using: "BTREE",
        fields: [
          { name: "stateId" },
        ]
      },
      {
        name: "cityId",
        using: "BTREE",
        fields: [
          { name: "cityId" },
        ]
      },
      {
        name: "countyId",
        using: "BTREE",
        fields: [
          { name: "countyId" },
        ]
      },
    ]
});
                },

                async down (queryInterface, Sequelize) {
                    await queryInterface.dropTable('ht_school');
                }
            }
        
