import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
}
