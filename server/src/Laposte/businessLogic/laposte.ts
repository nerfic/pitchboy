import fs from 'fs';
import { IDatabase, IFields } from '../../Services/database/entities';

class LaPoste {
    static data = JSON.parse(fs.readFileSync('./src/Services/database/laposte_hexasmal.json', 'utf-8'));

    getAllCities() {
        const allCities = LaPoste.data.map((item: IDatabase) => item.fields.nom_de_la_commune);
        return allCities;
    }

    getCityWithZipCode(zipcode: string) {
        const cityData = LaPoste.data.find((item: IDatabase) => item.fields.code_postal === zipcode);
        return cityData ? cityData : 'Aucune commune';
    }

    updateCityByZipCode(zipcode: string, updatedData: IFields) {
        const cityIndex = LaPoste.data.findIndex((item: IDatabase) => item.fields.code_postal === zipcode);

        if (cityIndex !== -1) {
            const existingData = LaPoste.data[cityIndex];

            const newData = {
                ...existingData,
                fields: {
                    ...existingData.fields,
                    ...updatedData
                }
            };

            LaPoste.data[cityIndex] = newData;
            fs.writeFileSync('./src/Services/database/laposte_hexasmal.json', JSON.stringify(LaPoste.data, null, 2), 'utf-8');
            return newData;
        } else {
            return 'Code postal non trouvé';
        }
    }

    deleteCityByZipCode(zipcode: string) {
        const cityIndex = LaPoste.data.findIndex((item: IDatabase) => item.fields.code_postal === zipcode);

        if (cityIndex !== -1) {
            LaPoste.data.splice(cityIndex, 1);
            fs.writeFileSync('./src/Services/database/laposte_hexasmal.json', JSON.stringify(LaPoste.data, null, 2), 'utf-8');
            return 'Objet supprimé avec succès';
        } else {
            return 'Code postal non trouvé';
        }
    }

}

export default new LaPoste();
