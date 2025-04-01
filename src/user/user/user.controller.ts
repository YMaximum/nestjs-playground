import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpRedirectResponse,
  Param,
  Post,
  Query,
  Redirect,
} from '@nestjs/common';

@Controller('/api/users')
export class UserController {
  @Post()
  post(): string {
    return 'POST';
  }

  @Get()
  getAll(): string {
    return 'GET';
  }

  @Get('/sample-response')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  sampleResponse(): Record<string, string> {
    return {
      data: 'Sample Response',
    };
  }

  @Get('/redirect')
  @Redirect()
  redirect(): HttpRedirectResponse {
    return {
      url: '/api/users/sample-response',
      statusCode: 301,
    };
  }

  @Get('/hello')
  sayHello(
    @Query('first_name') firstname: string,
    @Query('last_name') lastName: string,
  ): string {
    return `Hello ${firstname} ${lastName}`;
  }

  @Get('/:id')
  getById(@Param('id') id: string): string {
    return `GET ${id}`;
  }
}
