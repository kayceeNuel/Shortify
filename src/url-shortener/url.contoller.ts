import { Controller, Get, Post, Body } from "@nestjs/common";
import { UrlService } from './url.service'; 
import { CreateUrlDto } from "./dto/create-url.dto"; 
import { UpdateUrlDto } from "./dto/update-url.dto";
import type { Url } from "../entity/url.entity";


Controller() 
export class UrlController {
    constructor ( private urlService: UrlService) {} 

    @Post('create')  
    async create (@Body() createUrlDto: CreateUrlDto) {
        return this.urlService.create(createUrlDto)
    }
}