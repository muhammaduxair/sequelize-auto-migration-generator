
            'use strict';
            
            module.exports = {
                async up (queryInterface, Sequelize) {
                    await queryInterface.createTable('ht_rfp_template', {
    id: {
      type: Sequelize.CHAR(36),
      allowNull: false,
      defaultValue: Sequelize.literal('(uuid())'),
      primaryKey: true
    },
    companyDetails: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    proposalDetails: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    biddersRequirements: {
      type: Sequelize.TEXT,
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
    tableName: 'ht_rfp_template',
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
                    await queryInterface.dropTable('ht_rfp_template');
                }
            }
        
