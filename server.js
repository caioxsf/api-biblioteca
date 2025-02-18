import express from 'express'
import routerLivro from './routes/livroRouter.js';

import swaggerUi from 'swagger-ui-express'
import { createRequire } from "module"
const require = createRequire(import.meta.url);
const outputJson = require("./swaggerOutput.json")

const app = express();
app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(outputJson));
app.use("/livros", routerLivro);

app.listen(5000, () => {
    console.log("back-end rodando")
})