import { Test, TestingModule } from '@nestjs/testing';
import { ListsService } from './lists.service';

const mockeList = {
  create: jest.fn(),
}

const mockHttpService = {
  post: jest.fn(),
}

describe('ListsService', () => {
  let service: ListsService;
  beforeEach(async () => {
    service = new ListsService(mockeList as any, mockHttpService);
  });

  it('deve criar uma lista', ()=> {

  })
  // let service: ListsService;
  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     providers: [ListsService],
  //   }).compile();
  //   service = module.get<ListsService>(ListsService);
  // });
  // it('should be defined', () => {
  //   expect(service).toBeDefined();
  // });

