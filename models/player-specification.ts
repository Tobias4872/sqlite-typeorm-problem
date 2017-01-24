import { Column, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany,
         OneToOne, PrimaryGeneratedColumn, Table } from "typeorm";
import { Publisher } from "./publisher";

@Table()
export class PlayerSpecification {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        length: 128,
    })
    public name: string;

    @ManyToOne((type) => Publisher, (publisher) => publisher.playerSpecifications)
    @JoinColumn()
    public publisher: Publisher;

}
