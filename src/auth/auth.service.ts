import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register({
    name,
    email,
    password,
    phone,
    birthday,
    gender,
    status,
    country,
    code_phone,
  }: RegisterDto) {
    const user = await this.usersService.findOneByUsername(email);
    if (user) {
      throw new BadRequestException('Usuario ya existe');
    }
    return await this.usersService.create({
      username: email,
      name,
      email,
      password: await bcryptjs.hash(password, 10),
      phone,
      birthday,
      gender,
      status,
      country,
      code_phone,
    });
  }
  async login({ username, password }: LoginDto) {
    const user = await this.usersService.findByUsernameWithPassword(username);
    if (!user) {
      throw new UnauthorizedException('Email no es correcto');
    }
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Contraseña es incorrecta');
    }
    const payload = { sub: user.id, username: user.username, role: user.role };
    const access_token = await this.jwtService.signAsync(payload);
    return {
      access_token,
      username: user.username,
    };
  }

  async profile({ username, role }: { username: string; role: string }) {
    return await this.usersService.findOneByUsername(username);
  }
}
