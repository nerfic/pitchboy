import { Request, Response } from 'express';
import LaPoste from '../businessLogic/laposte';

const getAllCitiesWithPagination = async (req: any, res: Response) => {
    try {
        const offset = (req.query.page - 1) * req.query.pageSize;
        console.log(offset)
        //need to debug

        return res.status(200).json({ data: LaPoste.getAllCitiesWithPagination(req.query.page, req.query.pageSize, offset), status: 200 })
    } catch (err) {
        return res.status(500).json({ message: "Internal error sorry", status: 500 })
    }
}

export default getAllCitiesWithPagination;
