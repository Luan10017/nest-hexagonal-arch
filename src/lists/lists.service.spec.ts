import { Test, TestingModule } from '@nestjs/testing';
import { ListsService } from './lists.service';
import { ListGatewayInMemory } from './gateways/list-gateway-in-memory';
import { of } from 'rxjs';

const mockHttpService = {
  post: jest.fn().mockReturnValue(of(null)),
};

describe('ListsService', () => {
  let service: ListsService;
  let listGateway: ListGatewayInMemory;
  beforeEach(() => {
    listGateway = new ListGatewayInMemory();
    service = new ListsService(listGateway, mockHttpService as any);
  });

  it('deve criar uma lista', async () => {
    const list = await service.create({ name: 'Lista de compras' });
    expect(listGateway.items).toEqual([list]);
  });
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
});
