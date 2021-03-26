import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { JwtModule } from '@nestjs/jwt';
import { JWTConfig } from '../jwt.config';

@Module({
  imports: [JwtModule.registerAsync(JWTConfig)],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
