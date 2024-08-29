import AppModule from "@/src/modules/app/app.module";
import { NestFactory } from "@nestjs/core";
import {
	FastifyAdapter,
	type NestFastifyApplication,
} from "@nestjs/platform-fastify";

enum APP_PROPERTIES {
	HOST = "localhost",
	PORT = 3001,
	GLOBAL_PREFIX = "api",
}

export async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter(),
	);

	await app.listen(APP_PROPERTIES.PORT, APP_PROPERTIES.HOST);

	return app;
}

if (!process.env.HMR) bootstrap();
