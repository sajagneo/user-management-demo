import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { JwtService } from '@nestjs/jwt';

@Controller('login')
export class LoginController {
  constructor(
    private readonly loginService: LoginService,
    private jwtService: JwtService,
  ) {}

  @Post()
  create(@Body() createLoginDto: CreateLoginDto) {
    const user = {
      id: 1,
      email: 'abc@yahoo.com',
      firstName: 'string',
      lastName: 'string',
    };

    const modulePermissionList = [
      {
        moduleName: 'Faq',
        permissionList: [
          {
            permissionId: 30,
            permissionName: 'READ',
          },
          {
            permissionId: 31,
            permissionName: 'WRITE',
          },
        ],
      },
      {
        moduleName: 'Article',
        permissionList: [
          {
            permissionId: 32,
            permissionName: 'READ',
          },
          {
            permissionId: 33,
            permissionName: 'WRITE',
          },
        ],
      },
    ];

    return {
      statusCode: 200,
      message: 'The request has succeeded',
      data: {
        accessToken: this.jwtService.sign({
          modulePermissionList,
          user,
        }),
      },
    };
  }

  // @Get()
  // findAll() {
  //   return this.loginService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.loginService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateLoginDto: UpdateLoginDto) {
  //   return this.loginService.update(+id, updateLoginDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.loginService.remove(+id);
  // }
}
