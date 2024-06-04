import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CatsModule } from './cats/cats.module';
import { ConfigModule } from "@nestjs/config";
import { BreedsModule } from './breeds/breeds.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'db_yarn_library',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CatsModule,
    BreedsModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
