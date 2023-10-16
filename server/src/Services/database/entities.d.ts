export interface IDatabase {
    datasetid: string,
    recordid: string,
    fields: IFields;
    geometry: IGeometry;
    record_timestamp: string;
}

interface IFields {
    nom_de_la_commune: string;
    libelle_d_acheminement: string;
    code_postal: string;
    coordonnees_gps: [number, number];
    code_commune_insee: string;
}

interface IGeometry {
    type: string;
    coordinates: [number, number];
}
