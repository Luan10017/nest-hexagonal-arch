import { Inject, Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ListGatewayInterface } from './gateways/list-gateway-interface';
import { List } from './entities/list.entity';
import EventEmitter from 'events';
import { ListCreatedEvent } from './events/list-created.event';

@Injectable()
export class ListsService {
  constructor(
    @Inject('ListPersistenceGateway')
    private listPersistenceGateway: ListGatewayInterface,
    @Inject('EventEmitter')
    private eventEmitter: EventEmitter,
  ) {}

  async create(createListDto: CreateListDto) {
    const list = new List(createListDto.name);
    await this.listPersistenceGateway.create(list);
    this.eventEmitter.emit('list.created', new ListCreatedEvent(list));
    return list;
  }

  findAll() {
    return this.listPersistenceGateway.findAll();
  }

  async findOne(id: number) {
    const list = await this.listPersistenceGateway.findByid(id);
    if (!list) {
      throw new Error('List not found');
    }
    return list;
  }

  update(id: number, updateListDto: UpdateListDto) {
    return `This action updates a #${id} list`;
  }

  remove(id: number) {
    return `This action removes a #${id} list`;
  }
}
