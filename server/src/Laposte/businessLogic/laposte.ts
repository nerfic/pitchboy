import fs from 'fs';
import { IDatabase } from '../../Services/database/entities';

class LaPoste {
    static data = JSON.parse(fs.readFileSync('./src/Services/database/laposte_hexasmal.json', 'utf-8'));

    getAllCities() {
        const allCities = LaPoste.data.map((item: IDatabase) => item.fields.nom_de_la_commune);
        return allCities;
    }
}

export default new LaPoste();
