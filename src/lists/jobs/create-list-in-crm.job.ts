import { OnQueueFailed, Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { ListGatewayInterface } from '../gateways/list-gateway-interface';
import { Inject } from '@nestjs/common';
import { ListCreatedEvent } from '../events/list-created.event';

@Processor()
export class CreateListInCrmJob {
  constructor(
    @Inject('ListIntegrationGateway')
    private listIntegrationGateway: ListGatewayInterface,
  ) {}

  @Process('list.created')
  async handle(job: Job<ListCreatedEvent>) {
    console.log('Processing job');
    console.log(job.data);
    const event = job.data;
    await this.listIntegrationGateway.create(event.list);
  }

  @OnQueueFailed({ name: 'list.created' })
  handleErrors(error: Error) {
    console.error('CreateListInCrmJob', error);
  }
}
