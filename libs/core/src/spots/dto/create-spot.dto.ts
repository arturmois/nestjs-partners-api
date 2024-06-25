import { Prisma } from '@prisma/client';

export class CreateSpotDto implements Prisma.SpotCreateWithoutEventInput {
  name: string;
}
