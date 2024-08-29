import { Injectable } from "@nestjs/common";
import type { NestFastifyApplication } from "@nestjs/platform-fastify";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

@Injectable()
export class CustomSwaggerService {
	setupSwagger(app: NestFastifyApplication): void {
		// Измените тип на NestFastifyApplication
		const config = new DocumentBuilder()
			.setTitle("My API")
			.setDescription("The API description")
			.setVersion("1.0")
			.addBearerAuth()
			.build();

		const document = SwaggerModule.createDocument(app, config);
		SwaggerModule.setup("api-docs", app, document);
	}
}
