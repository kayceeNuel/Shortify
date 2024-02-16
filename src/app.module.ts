import { Module } from '@nestjs/common';
import { UrlModule }  from 'src/url-shortener/url.module';

@Module({
  imports: [ UrlModule, ],
})
export class AppModule {}
