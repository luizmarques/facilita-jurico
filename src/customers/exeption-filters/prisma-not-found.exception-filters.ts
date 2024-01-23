import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { Response } from "express";


@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaNotFoundExceptionFilter implements ExceptionFilter {

    catch(exeption: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost){
        const context = host.switchToHttp();
        const response = context.getResponse<Response>();

        if(exeption.code === 'P2025') {
            response.status(404).json({
                statusCode: 404,
                message: exeption.meta.cause,              
            })
        }
    }
}