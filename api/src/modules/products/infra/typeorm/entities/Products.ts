import { Entity,Column,PrimaryGeneratedColumn } from 'typeorm'

@Entity('products')
export default class Products{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    nome: string

    @Column()
    fabricacao: string

    @Column()
    tamanho: string

    @Column()
    valor: string
}
