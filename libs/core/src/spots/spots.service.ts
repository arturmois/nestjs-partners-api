import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateSpotDto } from './dto/create-spot.dto';
import { UpdateSpotDto } from './dto/update-spot.dto';

@Injectable()
export class SpotsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(event_id: string, createSpotDto: CreateSpotDto) {
    const event = await this.prisma.event.findFirst({
      where: { id: event_id },
    });
    if (!event) {
      throw new Error('Event not found');
    }
    return this.prisma.spot.create({
      data: {
        event_id,
        ...createSpotDto,
      },
    });
  }

  findAll(event_id: string) {
    return this.prisma.spot.findMany({
      where: {
        event_id,
      },
    });
  }

  findOne(event_id: string, spot_id: string) {
    return this.prisma.spot.findUnique({
      where: {
        event_id,
        id: spot_id,
      },
    });
  }

  update(event_id: string, spot_id: string, updateSpotDto: UpdateSpotDto) {
    return this.prisma.spot.update({
      where: {
        event_id,
        id: spot_id,
      },
      data: updateSpotDto,
    });
  }

  remove(event_id: string, spot_id: string) {
    return this.prisma.spot.delete({
      where: {
        event_id,
        id: spot_id,
      },
    });
  }
}
