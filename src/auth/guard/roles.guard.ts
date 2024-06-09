import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from '../enums/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.getAllAndOverride<Role>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if(!roles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    console.log(user );
    return roles === user.role;
  }
}
