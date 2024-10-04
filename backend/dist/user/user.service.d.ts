import { PrismaService } from 'src/prisma.service';
import { AuthDto } from 'src/auth/dto/auth.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getById(id: string): Promise<{
        tasks: {
            id: string;
            created: Date;
            updateAt: Date;
            name: string;
            priority: import(".prisma/client").$Enums.Priority | null;
            isCompleted: boolean | null;
            userId: string;
        }[];
    } & {
        id: string;
        created: Date;
        updateAt: Date;
        email: string;
        name: string | null;
        password: string;
        workInterval: number | null;
        breakInterval: number | null;
        intervalCount: number | null;
    }>;
    getByEmail(email: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        created: Date;
        updateAt: Date;
        email: string;
        name: string | null;
        password: string;
        workInterval: number | null;
        breakInterval: number | null;
        intervalCount: number | null;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    create(dto: AuthDto): Promise<{
        id: string;
        created: Date;
        updateAt: Date;
        email: string;
        name: string | null;
        password: string;
        workInterval: number | null;
        breakInterval: number | null;
        intervalCount: number | null;
    }>;
}
