import { Controller, Body, Post } from "@nestjs/common";
import { UrlService } from './url.service';
import { CreateUrlDto } from './dto/create-url.dto';
import { UpdateUrlDto} from "./dto/update-url.dto";

@Controller() 
export class UrlController {
    constructor(private readonly urlService: UrlService) {}

    @Post('link')
    async createLink(@Body() createUrlDto: CreateUrlDto) {
        return this.urlService.create(createUrlDto);
    }
}
