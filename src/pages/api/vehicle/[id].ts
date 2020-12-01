import {NextApiRequest, NextApiResponse} from 'next';
import sqlite from 'sqlite';

const getVehicleById = async (req: NextApiRequest, res: NextApiResponse) => {
    const db = await sqlite.open("./mydb.sqlite");
    const vehicleById = await db.get(`SELECT * FROM vehicle WHERE id=${req.query.id}`);
    
    res.json(vehicleById)
}

export default getVehicleById