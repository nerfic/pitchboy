import { Request, Response } from 'express';
import LaPoste from '../businessLogic/laposte';

const delCityWithZipCode = async (req: Request, res: Response) => {
    try {
        return res.status(200).json({ data: LaPoste.deleteCityByZipCode(req.params.zipcode), status: 200 })
    } catch (err) {
        return res.status(500).json({ message: "Internal error sorry", status: 500 })
    }
}

export default delCityWithZipCode;
