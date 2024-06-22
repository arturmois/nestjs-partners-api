import { Prisma } from '@prisma/client';

export class CreateEventDto implements Prisma.EventCreateInput {
  name: string;
  description: string;
  price: number;
  date: string | Date;
}
