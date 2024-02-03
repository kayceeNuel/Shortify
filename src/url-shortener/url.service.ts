

import { 
    Injectable,
    BadRequestException,
    NotFoundException, 
    UnprocessableEntityException
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { nanoid } from "nanoid";
import { isURL } from "class-validator"; 
import { Repository } from "typeorm";
import { CreateUrlDto } from "./dto/create-url.dto";
import { UpdateUrlDto } from "./dto/update-url.dto";
import { UrlEntity } from '../entity/url.entity'


Injectable() 
export class UrlService {
    private readonly baseURL = 'http://localhost:3000';
    private readonly urlCodeLength = 8;
    
    constructor ( 
        @InjectRepository(UrlEntity)
        private repo: Repository <UrlEntity>,
    ) {}

    async create (createUrlDto: CreateUrlDto) {
        const { longUrl } = createUrlDto;
        if (!isURL (longUrl)) {
            throw new BadRequestException ('Invaild URL format');
        };

        const urlCode = nanoid(this.urlCodeLength)

        try {
            //check if the originalURL is shortened 
            let url = await this.repo.findOne({ longUrl });
            //return if it exits
            if(url) {
                return url.shortUrl;
            }
            //if it doesn't exit shorten it
            const shortUrl = `${this.baseURL}/${urlCode}`;

            url = this.repo.create({
                urlCode,
                longUrl,
                shortUrl,
                
            });

            await this.repo.save(url)
            return url.shortUrl
        }   catch(error) {
            throw new UnprocessableEntityException ('Server Error');
        }
    }
    
    async redirect(urlCode: string) {
        try {
          const url = await this.repo.findOne({ urlCode });
    
          if (url) {
            return url.longUrl;
          }
        } catch (error) {
          throw new NotFoundException('Resource Not Found');
        }
      }
    
      findAll() {
        return 'This action returns all URLs';
      }
    
      findOne(id: number) {
        return `This action returns URL with id #${id}`;
      }
    
      update(id: number, updateUrlDto: UpdateUrlDto) {
        return `This action updates URL with id #${id}`;
      }
    
      remove(id: number) {
        return `This action removes URL with id #${id}`;
      }
}