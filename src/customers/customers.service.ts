import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CustomersService {

  constructor(private prisma: PrismaService){}

  create(createCustomerDto: CreateCustomerDto) {  
    return this.prisma.customer.create({ data: createCustomerDto});
  }

  findAll() {
    return this.prisma.customer.findMany({
      orderBy: {
        createdAt: 'desc',
      }
    });
  }

  findOne(customerId: number) {
    return this.prisma.customer.findUniqueOrThrow({
      where: {
        customerId
      }
    });
  }

  update(customerId: number, updateCustomerDto: UpdateCustomerDto) {
    return this.prisma.customer.update({
      where: {
        customerId
      },
      data: updateCustomerDto,
    });
  }

  remove(customerId: number) {
    return this.prisma.customer.delete({
      where: {
        customerId
      }
    });
  }
}
