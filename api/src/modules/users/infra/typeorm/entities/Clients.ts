import { Entity,Column,PrimaryGeneratedColumn} from 'typeorm'

@Entity('clients')
export default class Clients{

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

