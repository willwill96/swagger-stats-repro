import express from 'express'
import apiSpec from './swagger.json'  assert { type: 'json' };
import swaggerStats from 'swagger-stats'

const app = express()

app.use(swaggerStats.getMiddleware({swaggerSpec: apiSpec, swaggerOnly: true}))

app.get('*', (req, res)=>{
    return res.send('hello world')
})
app.listen(3001, ()=>{
    console.log('listening')
})