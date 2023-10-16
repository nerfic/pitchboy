import { Request, Response } from 'express';
import LaPoste from '../businessLogic/laposte';

const putCityByZipCode = async (req: any, res: Response) => {
    try {
        return res.status(200).json({ data: LaPoste.updateCityByZipCode(req.params.zipcode, { ...req.body }), status: 200 })
    } catch (err) {
        return res.status(500).json({ message: "Internal error sorry", status: 500 })
    }
}

export default putCityByZipCode;
