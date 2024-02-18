import { 
    Controller, 
    Get, 
    Post, 
    Body 
} from "@nestjs/common";
import { UrlService } from './url.service'; 
import { CreateUrlDto } from "./dto/create-url.dto"; 
import { UpdateUrlDto } from "./dto/update-url.dto";
import type { Url } from "../entity/url.entity";
import { promises } from "dns";

@Controller('urls')
export class UrlController {
    constructor ( private urlService: UrlService) {} 

    @Get() 
    async fetchAllUrl (): Promise<Url[]> {
        return this.urlService.fetchAllUrl()
    }
   
}