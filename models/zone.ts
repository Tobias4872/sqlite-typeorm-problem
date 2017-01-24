import { Column, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, Table } from "typeorm";
import { PlayerSpecification } from "./player-specification";
import { Site } from "./site";

@Table()
export class Zone {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        length: 128,
    })
    public name: string;

    @ManyToOne((type) => Site, (site) => site.zones, {
        nullable: false,
        onDelete: "CASCADE",
    })
    @JoinColumn()
    public site: Site;

    @ManyToOne((type) => PlayerSpecification, {
        onDelete: "CASCADE",
    })
    @JoinColumn()
    public playerSpecification: PlayerSpecification;

}
