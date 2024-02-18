import { IsString, IsUrl, IsOptional } from "class-validator"; 


export class CreateUrlDto { 
    @IsUrl({}, { message: 'Invalid URL format' })
    readonly originalUrl: string;

    @IsString()
    @IsOptional()
   readonly shortUrl?: string;
}
