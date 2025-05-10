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
            pcvSmaller: number,
            pcvBigger: number,
            areaBigger: number,
            areaSmaller: number,
            greenAreaBigger: number,
            greenAreaSmaller: number
        }
    }>('/neighborhood', async (req, res) => {

        let query = "SELECT * FROM green_area_neighborhood WHERE 1=1";
        const whereValues = [];
        let index = 1;
        let data;
        if(req.query.pcvBigger){
            const pcvBigger = req.query.pcvBigger;
            query += ` AND pcv_index >= $${index++}`;
            whereValues.push(pcvBigger);
        }

        if(req.query.pcvSmaller){
            const pcvSmaller = req.query.pcvSmaller;
            query += ` AND pcv_index <= $${index++}`;
            whereValues.push(pcvSmaller);
        }
        

        if(req.query.areaBigger) {
            const areaBigger = req.query.areaBigger;
            query += ` AND total_area >= $${index++}`;
            whereValues.push(areaBigger);
        }

        if(req.query.areaSmaller) {
            const areaSmaller = req.query.areaSmaller;
            query += ` AND total_area <= $${index++}`;
            whereValues.push(areaSmaller);
        }

        if(req.query.greenAreaBigger) {
            const greenAreaBigger = req.query.greenAreaBigger;
            query += ` AND total_green_area > $${index++}`;
            whereValues.push(greenAreaBigger);
        }

        if(req.query.greenAreaBigger) {
            const greenAreaBigger = req.query.greenAreaBigger;
            query += ` AND total_green_area > $${index++}`;
            whereValues.push(greenAreaBigger);
        }
        
        console.log(index);

        if(whereValues.length)
            data = await client.query(query, whereValues);
        else
            data = await client.query(query);

        
        
        return {data: data.rows};
    });

    app.get('/neighborhood/:id', async (req: FastifyRequest<{ Params: { id: string } }>, res) => {
        const {id} = req.params;
        const data = await client.query("SELECT * FROM green_area_neighborhood WHERE id = $1",[id]);
        return data.rows[0];
    });

    app.listen({
        port: 3000
    });
}


main().then(() => {
    console.log("Server running on: http://localhost:3000/neighborhood");
})