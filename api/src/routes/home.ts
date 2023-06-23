import { Response, Router, Request } from 'express'
import { auth, catchAsync } from '../middleware'
import { User } from '../models'

const router = Router()

router.get(
    '/home',
    auth,
    catchAsync(async (req: Request, res: Response) => {
        const user = res.json(await User.findById(req.session!.userId))
    })
)

export default router
