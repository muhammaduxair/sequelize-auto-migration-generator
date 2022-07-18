
            'use strict';
            
            module.exports = {
                async up (queryInterface, Sequelize) {
                    await queryInterface.createTable('ht_intro_slider', {
    id: {
      type: Sequelize.CHAR(36),
      allowNull: false,
      defaultValue: Sequelize.literal('(uuid())'),
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING(70),
      allowNull: false
    },
    detail: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    active: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    image: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    buttonText: {
      type: Sequelize.STRING(70),
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
    }
  }, {
    Sequelize,
    tableName: 'ht_intro_slider',
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
                    await queryInterface.dropTable('ht_intro_slider');
                }
            }
        
