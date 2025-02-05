import { List } from '../entities/list.entity';

export interface ListGatewayInterface {
  create(list: List): Promise<List>;
  findAll(): Promise<List[]>;
  findByid(id: number): Promise<List>;
}
