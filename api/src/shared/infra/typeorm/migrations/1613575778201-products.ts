import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class products1613575778201 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
            new Table({
                name:'products',
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
                        name:'fabricacao',
                        type:'varchar',
                    },
                    {
                        name:'tamanho',
                        type:'varchar',
                    },
                    {
                        name:'valor',
                        type:'varchar',
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
