import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { healthRouter } from './routes/health'

const app = new Hono()

app.use('/*', cors())
app.route('/api', healthRouter)

app.get('/', (c) => c.json({ name: 'Backstage API', version: '0.1.0' }))

export default app
