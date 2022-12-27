const koa = require('koa')
const router = require('koa-router')

const app = new koa()
const router = new router()

let api = { app: app, router: router }
console.log(api)
export default app
