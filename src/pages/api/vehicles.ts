import {NextApiRequest, NextApiResponse} from 'next';
import sqlite from 'sqlite';

const getAllVehicles = async (req: NextApiRequest, res: NextApiResponse) => {
    const db = await sqlite.open("./mydb.sqlite");
    const vehicles = await db.all('SELECT * FROM vehicle');
    
    res.json(vehicles)
}

export default getAllVehicles