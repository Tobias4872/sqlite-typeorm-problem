import { Column, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Table } from "typeorm";
import { PlayerSpecification } from "./player-specification";
import { Site } from "./site";

@Table()
export class Publisher {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        length: 128,
    })
    public name: string;

    @OneToMany((type) => PlayerSpecification, (playerSpecification) => playerSpecification.publisher)
    public playerSpecifications: PlayerSpecification[];

    @OneToMany((type) => Site, (site) => site.publisher)
    public sites: Site[];

}
