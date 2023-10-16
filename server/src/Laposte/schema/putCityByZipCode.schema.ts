import Joi from "joi";
import { IFields } from "../../Services/database/entities";

// nom_de_la_commune: string;
//     libelle_d_acheminement: string;
//     code_postal: string;
//     coordonnees_gps: [number, number];
//     code_commune_insee: string;

const putCityByZipCode = Joi.object<IFields>({
    nom_de_la_commune: Joi.string()
        .min(1)
        .optional(),
    libelle_d_acheminement: Joi.string()
        .min(1)
        .optional(),
    code_postal: Joi.string()
        .min(5)
        .max(5)
        .optional(),
    code_commune_insee: Joi.string()
        .min(5)
        .max(5)
        .optional()
});

export default putCityByZipCode;
