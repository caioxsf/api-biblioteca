import swaggerAutogen from "swagger-autogen";

const doc = {
    host: "localhost:5000",
    info: {
        title: "API REST - Biblioteca",
        description: "API utilizando os padrões REST"
    }
}

const routes = ['./server.js']
const outputJson = './swaggerOutput.json';

swaggerAutogen({openapi: '3.0.0'})(outputJson, routes, doc)
.then(async () => {
    await import("./server.js")
})