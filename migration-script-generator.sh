#!/bin/bash

rm -r ./config/migrations
rm -r ./config/models
rm -r ./config/temp-dir

sequelize-auto -c ./sequelize.config.js

rm -r ./models

mkdir ./config/temp-dir

for FILE in ./config/models/*;
do 
    base_name=$(basename ${FILE})
    file_name=${base_name%.*}

    npx sequelize-cli migration:generate --name ${file_name}
    grep -zo "'${file_name}'.*" $FILE > ./config/temp-dir/${base_name}
done

for FILE in ./config/temp-dir/*;
do 
    head -n -3 ${FILE} > temp.txt; 
    mv temp.txt ${FILE}
    rm -f temp.txt
    echo "}" >> ${FILE}
    sed -i 's/DataTypes/Sequelize/g' ${FILE}
    sed -i 's/sequelize/Sequelize/g' ${FILE}
    sed -i "s/Sequelize.Sequelize.fn('uuid')/Sequelize.literal('(uuid())')/g" ${FILE}
    sed -i "s/Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')/Sequelize.literal('CURRENT_TIMESTAMP')/g" ${FILE}
done

for FILE in ./config/migrations/*;
do 
    base_name=$(basename ${FILE})
    file_name=${base_name%.*}

    basenameArray=(${base_name//-/ })
    filenameArray=(${file_name//-/ })

    FILE_CNT=$(cat  ./config/temp-dir/${basenameArray[1]})

    echo """
            'use strict';
            
            module.exports = {
                async up (queryInterface, Sequelize) {
                    await queryInterface.createTable(${FILE_CNT});
                },

                async down (queryInterface, Sequelize) {
                    await queryInterface.dropTable('${filenameArray[1]}');
                }
            }
        """ > ${FILE}
done

rm -r ./config/temp-dir
rm -r ./config/models
