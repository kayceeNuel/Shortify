import { Module } from "@nestjs/common";
import { UrlController } from "./url.contoller"; 
import { UrlService } from "./url.service"; 
import { TypeOrmModule } from "@nestjs/typeorm";
import { Url } from "src/entity";


@Module ({
    imports: [TypeOrmModule.forFeature([Url])],
    controllers: [UrlController], 
    providers: [ UrlService]
}) 
export class UrlModule {}