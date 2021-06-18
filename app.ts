import express from 'express';
import * as http from 'http';
import dotenv from 'dotenv';
import helmet from 'helmet';

const dotenvResult = dotenv.config();
if(dotenvResult.error) {
	throw dotenvResult.error
}

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const PORT: string | number = process.env.PORT || 3000;

app.use(express.json());
app.use(helmet());

app.get("/", (req: express.Request, res: express.Response) => {
	res.status(200).json({
		message: "Hello"
	})
})

server.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`)
})