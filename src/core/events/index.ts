import { PrismaClient } from '@prisma/client';

export interface IEvent {
  url?: string;
  title: string;
  description?: string;
  ownerId: string;
  participantId: string;
  status: 'new' | 'unread' | 'read';
  creationIp?: string;
  updationIp?: string;
}

class Events {
  private prisma:PrismaClient;
  constructor(){
    this.prisma = new PrismaClient();
  }

  public create = async (event: IEvent) => {
    if (!event) {
      throw new Error('Event is required');
    }

    const newEvent = await this.prisma.events.create({
      data: {
        url: event.url,
        title: event.title,
        description: event.description,
        ownerId: event.ownerId,
        participantId: event.participantId,
        status: event.status,
        creationIp: event.creationIp,
        updationIp: event.updationIp
      }
    });

    return newEvent;
  };
}

export default Events;
