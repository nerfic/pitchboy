const joiSchemaBodyValidation = (schema: any, transformBody?: boolean) => {
    return (req: any, res: any, next: any) => {
        const { error, value } = schema.validate(req.body);
        if (!error) {
            if (transformBody)
                req.body = value;
            next();
        } else {
            const { details } = error;
            const message = details.map((i: any) => i.message).join(',');
            res.status(422).json({ message });
        }
    }
};

export default joiSchemaBodyValidation;
