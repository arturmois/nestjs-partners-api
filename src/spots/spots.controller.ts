import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateSpotDto } from './dto/create-spot.dto';
import { UpdateSpotDto } from './dto/update-spot.dto';
import { SpotsService } from './spots.service';

@Controller('events/:event_id/spots')
export class SpotsController {
  constructor(private readonly spotsService: SpotsService) {}

  @Post()
  create(
    @Param('event_id') event_id: string,
    @Body() createSpotDto: CreateSpotDto,
  ) {
    return this.spotsService.create(event_id, createSpotDto);
  }

  @Get()
  findAll(@Param('event_id') event_id: string) {
    return this.spotsService.findAll(event_id);
  }

  @Get(':spot_id')
  findOne(
    @Param('event_id') event_id: string,
    @Param('spot_id') spot_id: string,
  ) {
    return this.spotsService.findOne(event_id, spot_id);
  }

  @Patch(':spot_id')
  update(
    @Param('event_id') event_id: string,
    @Param('spot_id') spot_id: string,
    @Body() updateSpotDto: UpdateSpotDto,
  ) {
    return this.spotsService.update(event_id, spot_id, updateSpotDto);
  }

  @Delete(':id')
  remove(
    @Param('event_id') event_id: string,
    @Param('spot_id') spot_id: string,
  ) {
    return this.spotsService.remove(event_id, spot_id);
  }
}
