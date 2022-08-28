import { CarsModule } from './../cars/cars.module';
import { Module } from '@nestjs/common';
import { SeedController } from './seed.controller';
import { SeedService } from './seed.service';
import { BrandsModule } from '../brands/brands.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [CarsModule, BrandsModule],
})
export class SeedModule {}
