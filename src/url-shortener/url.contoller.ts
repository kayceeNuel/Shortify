import { 
    Controller, 
    Get, 
    Post, 
    Body, 
    UsePipes,
    ValidationPipe
} from "@nestjs/common";
import { UrlService } from './url.service'; 
import { CreateUrlDto } from "./dto/create-url.dto"; 
import { UpdateUrlDto } from "./dto/update-url.dto";
import type { Url } from "../entity/url.entity";


@Controller('urls')
export class UrlController {
    constructor ( private urlService: UrlService) {} 

    @Get() 
    async fetchAllUrl (): Promise<Url[]> {
        return this.urlService.fetchAllUrl()
    }
   
    @Post() 
    @UsePipes(ValidationPipe)
    createUrl(@Body() createUrlDto: CreateUrlDto): Promise<Url> {
        return this.urlService.createUrl(createUrlDto)
    }
}