"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.use(cookieParser());
    app.enableCors({
        origin: ['http://localhost:3001'],
        credentials: true,
        exposedHeaders: 'set-cookie'
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map