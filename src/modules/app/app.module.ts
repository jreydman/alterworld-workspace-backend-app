import {
	type MiddlewareConsumer,
	Module,
	type NestModule,
	type OnModuleInit,
} from "@nestjs/common";
import SwaggerModule from "@/src/modules/swagger/swagger.module";

@Module({
	imports: [SwaggerModule],
	controllers: [],
	providers: [],
	exports: [],
})
export default class AppModule implements NestModule, OnModuleInit {
	constructor(private readonly customSwaggerService: Sw) {}

	onModuleInit() {
		throw new Error("Method not implemented.");
	}
	configure(consumer: MiddlewareConsumer) {}
}
