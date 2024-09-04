import { Module } from '@nestjs/common';
import HealthModule from '../health/health.module';

@Module({
	imports: [HealthModule],
	controllers: [],
	providers: [],
	exports: [],
})
export default class AppModule {}
