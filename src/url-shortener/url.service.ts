import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Url } from '../entity/url.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUrlDto } from "./dto/create-url.dto";


Injectable() 
export class UrlService {
    constructor (
        @InjectRepository(Url)  private readonly urlRepository : Repository<Url>  ) {}

        //get All Url links
        async fetchAllUrl(): Promise<Url[]> {
            return this.urlRepository.find(); 
        }

        
        async createUrl (createUrlDto:CreateUrlDto) {
            return this.urlRepository.create (createUrlDto)
        }
}