import { Module } from "@nestjs/common";
import { UrlModule } from "./url.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import entities from "src/entity";


@Module ({ 
  imports: [
    ConfigModule.forRoot( { isGlobal: true}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService ) => ({
        type: "postgres",
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'), 
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'), 
        entities: entities,
        synchronize: true, 
      
      }),
      inject: [ConfigService],
    }),
    UrlModule,
  ], 
  controllers: [],
  providers: [], 
})

 export class AppModule {}