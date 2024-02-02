import { Column,Entity, PrimaryGeneratedColumn } from "typeorm";

    Entity()
    export class UrlEntity {
    @PrimaryGeneratedColumn() 
    id: number;


    @Column({ unique: true}) 
    shortUrl: String;


    @Column() 
    longUrl: String;


    @Column({nullable: true})
    redirectUrl: String | null
};