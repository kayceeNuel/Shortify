import { Module } from "@nestjs/common";
import { UrlController } from "./url.contoller"; 
import { UrlService } from "./url.service"; 

@Module ({
    controllers: [UrlController], 
    providers: [ UrlService]
}) 
export class UrlModule {}