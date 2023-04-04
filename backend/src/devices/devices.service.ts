import { Injectable } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { Device } from './entities/device.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult';
import { DeleteResult } from 'typeorm/query-builder/result/DeleteResult';

@Injectable()
export class DevicesService {
  constructor(
    @InjectRepository(Device)
    private readonly deviceRepository: Repository<Device>,
  ) {}
  create(createDeviceDto: CreateDeviceDto): Promise<Device> {
    const newDevice = this.deviceRepository.create(createDeviceDto);
    return this.deviceRepository.save(newDevice);
  }

  findAll(): Promise<Device[]> {
    return this.deviceRepository.find();
  }

  findOne(id: string): Promise<Device | null> {
    return this.deviceRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: string, updateDeviceDto: UpdateDeviceDto): Promise<UpdateResult> {
    return this.deviceRepository.update(id, {
      ...updateDeviceDto,
    });
  }

  remove(id: string): Promise<DeleteResult> {
    return this.deviceRepository.delete({
      id: id,
    });
  }
}
