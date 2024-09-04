import { Controller, Get } from '@nestjs/common';
import {
	HealthCheck,
	type HealthCheckService,
	type MemoryHealthIndicator,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
	constructor(
		private health: HealthCheckService,
		private memory: MemoryHealthIndicator,
	) {}

	@Get()
	@HealthCheck()
	check() {
		return this.health.check([
			() => this.memory.checkRSS('memory_rss', 150 * 1024 * 1024),
			() => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024),
		]);
	}
}
