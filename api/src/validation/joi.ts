import { ObjectSchema } from '@hapi/joi'
import { BadRequest } from '../errors/index'

export const validate = async (schema: ObjectSchema, payload: any) => {
    try {
        await schema.validateAsync(payload, { abortEarly: false })
    } catch (e: any) {
        throw new BadRequest(e)
    }
}
