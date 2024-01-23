import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CustomersModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
