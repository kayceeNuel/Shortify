
import { IsString, IsNotEmpty, IsBoolean} from 'class-validator';

export class CreateUrlDto {
    @IsString() 
    @IsNotEmpty()
    longUrl: string;

    @IsBoolean()
    redirect: boolean;
    
}

