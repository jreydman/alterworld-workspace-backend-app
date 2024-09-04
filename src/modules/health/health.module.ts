import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';

@Module({
	imports: [TerminusModule],
})
export default class HealthModule {}
