import { Prisma } from '@prisma/client';

export class CreateSpotRequest implements Prisma.SpotCreateWithoutEventInput {
  name: string;
}
