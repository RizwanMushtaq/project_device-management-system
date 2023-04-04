import { DevicesController } from './devices.controller';
import { DevicesService } from './devices.service';
import { Device } from './entities/device.entity';
import { Repository } from 'typeorm';

describe('DevicesController', () => {
  let devicesController: DevicesController;
  let devicesService: DevicesService;

  let deviceRepository: Repository<Device>;

  beforeEach(async () => {
    devicesService = new DevicesService(deviceRepository);
    devicesController = new DevicesController(devicesService);
  });

  it('should be defined', () => {
    expect(devicesController).toBeDefined();
  });
});
