import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class clients1613575768714 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
            new Table({
                name:'clients',
                columns:[
                    {
                        name: 'id',
                        type:'uuid',
                        isPrimary:true,
                        generationStrategy: 'uuid',
                        default:'uuid_generate_v4()'
                    },
                    {
                        name:'nome',
                        type:'varchar',
                    },
                    {
                        name:'email',
                        type:'varchar',
                    },
                    {
                        name:'cpf',
                        type:'varchar',
                    },
                    {
                        name:'sexo',
                        type:'varchar',
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('clients')
    }

}
