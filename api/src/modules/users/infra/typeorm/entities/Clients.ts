import { Entity,Column,PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'

@Entity('clients')
export default class Clients{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    nome: string

    @Column()
    email: string

    @Column()
    cpf: string

    @Column()
    sexo: string
    
}

