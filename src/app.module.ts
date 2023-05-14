import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 32768,
      username: 'postgres',
      password: 'postgrespw',
      database: 'testtable',
      // ! just for example
      autoLoadModels: true,
      // ! just for example
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
