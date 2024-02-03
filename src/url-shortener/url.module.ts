import { Module } from "@nestjs/common";
import { UrlController } from "./url.contoller";
import { UrlService } from "./url.service"
import { TypeOrmModule } from "@nestjs/typeorm";
import { UrlEntity } from "../entity/url.entity";

@Module({
    imports: [TypeOrmModule.forFeature([UrlEntity])],
    controllers: [UrlController],
    providers: [UrlService], 
})
export class UrlModule {};
