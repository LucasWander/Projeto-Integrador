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

    app.get<{
        Querystring: {
            pcvSmaller: number
        }
    }>('/neighborhood', async (req, res) => {
        console.log(req.query);

        const query = "SELECT * FROM green_area_neighborhood";
        let data;

        if(req.query.pcvSmaller){
            const pcvSmaller = req.query.pcvSmaller;
            data = await client.query("SELECT * FROM green_area_neighborhood WHERE pcv_index < $1", [pcvSmaller]);
        }
        else {
            data = await client.query(query);
        }
        
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


main().then(() => {
    console.log("Server running on: http://localhost:3000/neighborhood");
})