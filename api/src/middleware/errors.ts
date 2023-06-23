import {
    ErrorRequestHandler,
    NextFunction,
    Request,
    RequestHandler,
    Response,
} from 'express'

export const catchAsync =
    (handler: RequestHandler | any) =>
    (...args: [Request, Response, NextFunction]) =>
        handler(...args).catch(args[2])

export const serverError: ErrorRequestHandler = (err, _req, res, _next) => {
    if (!err.status) {
        console.error(err.stack)
    }

    res.status(err.status || 500).json({
        message: err.message || 'Internal server Error',
    })
}

export const notFound = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ message: 'Not found' })
}
