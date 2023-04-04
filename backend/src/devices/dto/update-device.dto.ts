import { PartialType } from '@nestjs/mapped-types';
import { CreateDeviceDto } from './create-device.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDeviceDto extends PartialType(CreateDeviceDto) {
  @ApiProperty()
  deviceName: string;

  @ApiProperty()
  deviceType: string;

  @ApiProperty()
  ownerName: string;

  @ApiProperty()
  batteryStatus: number;
}
