import { Column,Entity, PrimaryGeneratedColumn } from "typeorm";

    Entity()
    export class Url {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column() 
    orginialUrl: string;

    @Column() 
    shortUrl: string;
   
};