import {NextApiRequest, NextApiResponse} from 'next';
import sqlite from 'sqlite'

const getAllVehicleByPersonId = async (req: NextApiRequest, res: NextApiResponse) => {
    const db = await sqlite.open("./mydb.sqlite");
    const personVehicle = await db.all(`SELECT * FROM vehicle WHERE ownerId=${req.query.id}`);
    
    res.json(personVehicle)
}

export default getAllVehicleByPersonId