    import { 
        Controller, 
        Get, 
        Post, 
        Body, 
        UsePipes,
        ValidationPipe,
        Param,
        Redirect
    } from "@nestjs/common";
    import { UrlService } from './url.service'; 
    import { CreateUrlDto } from "./dto/create-url.dto"; 
    import { Url } from "../entity/url.entity";

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

        @Get(':shortUrl') 
        @Redirect()
        async redirectToOriginalUrl(@Param('shortUrl') shortUrl: string) {
            const originalUrl = await this.urlService.redirectUrl(shortUrl);
            return { Url: originalUrl, statusCode: 301};
        }
    }