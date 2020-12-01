import {NextApiRequest, NextApiResponse} from 'next';
import sqlite from 'sqlite';

const getPeople = async (req: NextApiRequest, res: NextApiResponse) => {
    const db = await sqlite.open("./mydb.sqlite");
    const people = await db.all('SELECT * FROM person');
    
    res.json(people)
}

export default getPeople