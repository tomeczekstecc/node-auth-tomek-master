import { SessionOptions } from 'express-session'
import { IN_PROD } from '.'

const ONE_OUR = 1000 * 60 * 60
const THIRTY_MINUTES = ONE_OUR / 2
const SIX_HOURS = ONE_OUR * 6

const { env } = process

export const {
    SESSION_SECRET = 'secret',
    SESSION_NAME = 'sid',
    SESSION_IDLE_TIMEOUT = THIRTY_MINUTES,
} = env

export const SESSION_ABSOLUTE_TIMEOUT = +(env.SESSION_ABSOLUTE_TIMEOUT || SIX_HOURS)
export const SESSION_OPTIONS: SessionOptions = {
    secret: SESSION_SECRET,
    name: SESSION_NAME,
    cookie: {
        maxAge: +SESSION_IDLE_TIMEOUT,
        secure: IN_PROD,
        sameSite: true,
    },
    rolling: true,
    resave: false,
    saveUninitialized: false,
}
