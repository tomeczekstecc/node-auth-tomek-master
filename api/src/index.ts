import mongoose from 'mongoose'
import session from 'express-session'
import connectRedis from 'connect-redis'
import Redis from 'ioredis'
import { APP_PORT, MONGO_OPTIONS, MONGO_URI, REDIS_OPTIONS } from './config'
import { createApp } from './app'
;(async () => {
    await mongoose.connect(MONGO_URI, MONGO_OPTIONS)

    const RedisStore = connectRedis(session)

    const client = new Redis(REDIS_OPTIONS)

    const store = new RedisStore({ client })

    const app = createApp(store)

    app.listen(APP_PORT, () => console.log(`http://localhost:${3000}`))
})()
