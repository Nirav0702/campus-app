import { Module } from '@nestjs/common';
import { MongooseModule  } from '@nestjs/mongoose';
import { UserSchema } from './schema/users.schema';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './service/users/users.service';
import { User } from './schema/users.schema';

@Module({
  imports: [MongooseModule.forFeature([{name : User.name, schema : UserSchema}])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
