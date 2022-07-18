
            'use strict';
            
            module.exports = {
                async up (queryInterface, Sequelize) {
                    await queryInterface.createTable('ht_state', {
    id: {
      type: Sequelize.CHAR(36),
      allowNull: false,
      defaultValue: Sequelize.literal('(uuid())'),
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING(30),
      allowNull: false
    },
    stateCode: {
      type: Sequelize.STRING(2),
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
    tableName: 'ht_state',
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
    ]
});
                },

                async down (queryInterface, Sequelize) {
                    await queryInterface.dropTable('ht_state');
                }
            }
        
