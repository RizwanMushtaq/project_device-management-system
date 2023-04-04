import { DevicesService } from './devices.service';
import { Repository } from 'typeorm';
import { Device } from './entities/device.entity';

describe('DevicesService', () => {
  let devicesService: DevicesService;
  let deviceRepository: Repository<Device>;

  beforeEach(async () => {
    devicesService = new DevicesService(deviceRepository);
  });

  it('should be defined', () => {
    expect(devicesService).toBeDefined();
  });
});
