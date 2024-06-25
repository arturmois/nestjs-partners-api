import { TicketKind } from '@prisma/client';
import { IsString } from 'class-validator';

export class ReserveSpotDto {
  @IsString()
  spot: string[];
  @IsString()
  ticket_kind: TicketKind;
  @IsString()
  email: string;
}
