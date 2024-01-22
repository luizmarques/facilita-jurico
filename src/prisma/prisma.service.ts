import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { before } from 'node:test';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{
    async onModuleInit() {
        await this.$connect();
    }

    enableShutdownHooks(app: INestApplication) {
        process.on('beforeExit', async () => {
            await app.close()
        })
    }
}
