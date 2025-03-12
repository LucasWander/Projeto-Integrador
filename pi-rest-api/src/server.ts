import 'dotenv/config';
import fastify from "fastify";

const app = fastify();

app.get('/neighborhood', async (req, res) => {
    console.log(process.env.TESTE);
    return res.send([]);
});

app.listen({
    port: 3000
});