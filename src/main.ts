import { NestFactory } from '@nestjs/core';
import {
	FastifyAdapter,
	type NestFastifyApplication,
} from '@nestjs/platform-fastify';
import AppModule from './modules/app/app.module';

const HOST: Readonly<string> = 'localhost';
const PORT: Readonly<number> = 3001;
const GLOBAL_PREFIX: Readonly<string> = 'api';

export async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter(),
	);
	app.setGlobalPrefix(GLOBAL_PREFIX);
	app.enableShutdownHooks();

	await app.listen(PORT, HOST);

	return app;
}

if (!process.env.HMR) bootstrap();
