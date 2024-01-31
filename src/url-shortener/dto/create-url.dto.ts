
import { IsString, IsNotEmpty } from 'class-validator';

export class createUrlDto {
    @IsString() 
    @IsNotEmpty()
    longUrl: string;
}

