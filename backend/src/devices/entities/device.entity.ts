import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Device {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 250 })
  deviceName: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 250 })
  deviceType: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 250 })
  ownerName: string;

  @ApiProperty()
  @Column({ type: 'integer' })
  batteryStatus: number;
}
