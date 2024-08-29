import {
	type NestModule,
	type MiddlewareConsumer,
	type INestApplication,
	Module,
} from "@nestjs/common";
import {
	SwaggerModule as _SwaggerModule,
	DocumentBuilder,
} from "@nestjs/swagger";

@Module({
	imports: [],
	controllers: [],
	providers: [],
	exports: [],
})
export default class SwaggerModule implements NestModule {
	configure(consumer: MiddlewareConsumer): void {}

	static setupSwagger(app: INestApplication): void {
		const config = new DocumentBuilder()
			.setTitle("My API")
			.setDescription("API documentation")
			.setVersion("1.0")
			.addBearerAuth()
			.build();

		const document = _SwaggerModule.createDocument(app, config);
		_SwaggerModule.setup("api-docs", app, document);
	}
}
