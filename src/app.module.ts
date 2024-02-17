import { Module } from "@nestjs/common";
import { UrlModule } from "./url-shortener/url.module";
import { ConfigModule } from "@nestjs/config";



@Module ({ 
  imports: [
    ConfigModule.forRoot( { isGlobal: true}),
    UrlModule,
  ], 
  controllers: [],
  providers: [], 
})

 export class AppModule {}