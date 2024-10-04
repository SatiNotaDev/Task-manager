import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthService {
    private jwt;
    private userService;
    constructor(jwt: JwtService, userService: UserService);
    login(dto: AuthDto): Promise<{
        accessToken: string;
        refrechToken: string;
        user: {
            id: string;
            created: Date;
            updateAt: Date;
            email: string;
            name: string | null;
            workInterval: number | null;
            breakInterval: number | null;
            intervalCount: number | null;
        };
    }>;
    register(dto: AuthDto): Promise<{
        accessToken: string;
        refrechToken: string;
        user: {
            id: string;
            created: Date;
            updateAt: Date;
            email: string;
            name: string | null;
            workInterval: number | null;
            breakInterval: number | null;
            intervalCount: number | null;
        };
    }>;
    private issueTokens;
    private validateUser;
}
