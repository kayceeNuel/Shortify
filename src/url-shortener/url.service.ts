import { Injectable, BadRequestException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { nanoid } from "nanoid";
import { isURL } from "class-validator";
import { Repository } from "typeorm";
import { CreateUrlDto } from "./dto/create-url.dto";
import { UpdateUrlDto } from "./dto/update-url.dto";
import { UrlEntity } from '../entity/url.entity'

@Injectable()
export class UrlService {
    private readonly baseURL = 'http://localhost:3000';
    private readonly urlCodeLength = 8;

    constructor(
        @InjectRepository(UrlEntity)
        private repo: Repository<UrlEntity>,
    ) { }

    async create(createUrlDto: CreateUrlDto) {
        const { longUrl } = createUrlDto;
        if (!isURL(longUrl)) {
            throw new BadRequestException('Invalid URL format');
        }

        const existingUrl = await this.repo.findOneBy({ longUrl });
        if (existingUrl) {
            return existingUrl.shortUrl;
        }

        const urlCode = nanoid(this.urlCodeLength);
        const shortUrl = `${this.baseURL}/${urlCode}`;

        const url = this.repo.create({
            longUrl,
            shortUrl,
        });

        await this.repo.save(url);
        return url.shortUrl;
    }

    async redirect(redirectUrl: string) {
        try {
            const url = await this.repo.findOneBy({ shortUrl: redirectUrl });

            if (url) {
                return url.longUrl;
            } else {
                throw new NotFoundException('URL not found');
            }
        } catch (error) {
            throw new NotFoundException('URL not found');
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
