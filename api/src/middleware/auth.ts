import { Request, Response, NextFunction } from 'express'
import { Session } from 'express-session'
import { catchAsync } from '.'
import { isLoggedIn, logOut } from '../auth'
import { SESSION_ABSOLUTE_TIMEOUT } from '../config'
import { BadRequest, Unauthorized } from '../errors/index'

export const guest = (req: Request, _res: Response, next: NextFunction) => {
    if (isLoggedIn(req)) {
        return next(new BadRequest('You are already logged in'))
    }

    next()
}

export const auth = (req: Request, _res: Response, next: NextFunction) => {
    if (!isLoggedIn(req)) {
        return next(new Unauthorized('You must be logged in'))
    }
    next()
}

export const active = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!isLoggedIn(req)) {
        const now = Date.now()
        const { createdAt } = req.session as Session
        if (now > createdAt + SESSION_ABSOLUTE_TIMEOUT) {
            await logOut(req, res)
            return next(new Unauthorized('You must be logged in'))
        }
    }
    next()
}
