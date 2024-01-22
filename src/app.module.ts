import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [CustomersModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
