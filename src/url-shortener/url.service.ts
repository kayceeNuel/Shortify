import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Url } from '../entity/url.entity';
import { InjectRepository } from "@nestjs/typeorm";


Injectable() 
export class UrlService {
    constructor (
        @InjectRepository(Url) 
        private repo : Repository<Url> 
    ) {}
}