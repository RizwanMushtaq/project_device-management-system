import { ApiProperty } from '@nestjs/swagger';

export class CreateDeviceDto {
  @ApiProperty()
  deviceName: string;

  @ApiProperty()
  deviceType: string;

  @ApiProperty()
  ownerName: string;

  @ApiProperty()
  batteryStatus: number;
}
