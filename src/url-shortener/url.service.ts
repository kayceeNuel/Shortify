import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Url } from '../entity/url.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUrlDto } from "./dto/create-url.dto";
import { nanoid } from "nanoid";




Injectable() 
export class UrlService {
    constructor (
        @InjectRepository(Url)  private readonly urlRepository : Repository<Url>  ) {}

        //create Url.
        async createUrl (createUrlDto:CreateUrlDto) {
            //generate URL
           const shortUrl = nanoid(8); 

           const url = this.urlRepository.create({
               originalUrl: createUrlDto.originalUrl, 
               shortUrl: shortUrl
           });
            //save generated URLs to the DB
            return this.urlRepository.save(url);
        }

         //get All Url links
         async fetchAllUrl(): Promise<Url[]> {
            return this.urlRepository.find(); 
        }
}