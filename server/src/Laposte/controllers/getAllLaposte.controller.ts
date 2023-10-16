import fs from 'fs';
import { Request, Response } from 'express';
import { IDatabase } from '../../Services/database/entities';

const getAllLaposte = async (req: Request, res: Response) => {
    try {
        fs.readFile('./src/Services/database/laposte_hexasmal.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Erreur lors de la lecture du fichier JSON');
            }

            const jsonData = JSON.parse(data);
            const allCities = jsonData.map((item: IDatabase) => item.fields.nom_de_la_commune);
            return res.status(200).json({ data: allCities, status: 200 })
        });
    } catch (err) {
        return res.status(500).json({ message: "Internal error sorry", status: 500 })
    }
}

export default getAllLaposte;
