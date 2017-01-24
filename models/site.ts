import { Column, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany,
         PrimaryGeneratedColumn, Table } from "typeorm";
import { Publisher } from "./publisher";
import { Zone } from "./zone";

@Table()
export class Site {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        length: 128,
    })
    public name: string;

    @ManyToOne((type) => Publisher, (publisher) => publisher.sites, {
        nullable: false,
        onDelete: "CASCADE",
    })
    @JoinColumn()
    public publisher: Publisher;

    @OneToMany((type) => Zone, (zone) => zone.site)
    public zones: Zone[];

}
