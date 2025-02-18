import express from 'express'

import routerLivro from './routes/livroRouter.js';

const app = express();
app.use(express.json());

app.use("/livros", routerLivro);

app.listen(5000, () => {
    console.log("back-end rodando")
})