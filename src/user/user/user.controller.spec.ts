import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import * as httpMock from 'node-mocks-http';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should can say hello', () => {
    const response = controller.sayHello('Naufal', 'Yassar');
    expect(response).toBe('Hello Naufal Yassar');
  });

  it('should can get view', () => {
    const response = httpMock.createResponse();
    controller.viewHello('Yassar', response);

    expect(response._getRenderView()).toBe('index.html');
    expect(response._getRenderData()).toEqual({
      name: 'Yassar',
      title: 'Template Engine',
    });
  });
});
