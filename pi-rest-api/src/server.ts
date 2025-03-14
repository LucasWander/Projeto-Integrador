import 'dotenv/config';
import pg from 'pg';
import fastify, { FastifyRequest } from "fastify";

interface Params {
    id: number;
}

async function main() {
    const client = new pg.Client({
        connectionString: process.env.DATABASE_URL
    });
    const connection = await client.connect()

    const app = fastify();

    app.get('/neighborhood', async (req, res) => {

        const data = await client.query("SELECT * FROM green_area_neighborhood");
        return res.send(data.rows);
    });

    app.get('/neighborhood/:id', async (req: FastifyRequest<{ Params: { id: string } }>, res) => {
        const {id} = req.params;
        const data = await client.query("SELECT * FROM green_area_neighborhood WHERE id = $1",[id]);
        return res.send(data.rows[0]);
    });

    app.listen({
        port: 3000
    });
}


main().then()