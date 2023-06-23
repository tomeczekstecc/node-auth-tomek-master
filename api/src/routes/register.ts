import { Router } from 'express'
import { User } from '../models'
import { validate, registerSchema } from '../validation'
import { logIn } from '../auth'
import { catchAsync, guest } from '../middleware'
import { Request, Response } from 'express-serve-static-core'
import { BadRequest } from '../errors/index'

const router = Router()

router.post(
    '/register',
    guest,
    catchAsync(async (req: Request, res: Response) => {
        await validate(registerSchema, req.body)

        const { email, name, password } = req.body

        const found = await User.exists({ email })

        if (found) {
            throw new BadRequest('Invalid email')
        }

        const user = await User.create({
            email,
            name,
            password,
        })

        logIn(req, user.id)

        res.json({
            message: 'ok',
        })
    })
)

export default router
