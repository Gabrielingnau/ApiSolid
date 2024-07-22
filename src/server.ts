import { app } from "./app";
import { env } from "./env";

  app
	.listen({
		host: "0.0.0.0", //Para que essa plicação seja acessivel por quaquer frontEnd
		port: env.PORT,
	})
	.then(() => {
		console.log("Server is running");
	});


