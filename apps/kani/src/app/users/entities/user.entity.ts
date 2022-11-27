import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { BaseModel } from "../../common/model/base.model";

import { Role } from '@prisma/client';

export class UserAuth extends BaseModel {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @MinLength(6)
    password: string;

    role: Role;
}
