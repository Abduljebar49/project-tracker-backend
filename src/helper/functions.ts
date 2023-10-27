import { Response } from "express";


export function Response(res: Response, data, message = "", statusCode = 200) {
    return res.status(statusCode).send({
        message: message,
        model: data,
        statusCode: statusCode
    });
}