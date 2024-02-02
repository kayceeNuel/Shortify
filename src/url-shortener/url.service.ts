

import { 
    Injectable,
    BadRequestException,
    NotFoundException, 
    UnprocessableEntityException
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UrlEntity } from '../entity/url.entity'
import { CreateUrlDto } from "./dto/create-url.dto";
import { UpdateUrlDto } from "./dto/update-url.dto";


Injectable() 
export class UrlService {
    constructor ( 
        @InjectRepository(UrlEntity)
        private readonly UrlRepository: Repository <UrlEntity>,
    ) {}

    async create (createUrlDto: CreateUrlDto) {
        const { longUrl } = createUrlDto;
    }
}