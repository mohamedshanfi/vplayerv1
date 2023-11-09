// import json server library in index.js
const jsonServer = require('json-server')

// create server using json-server library
const mediaPlayerServer = jsonServer.create()

// create path to db.json file
const router = jsonServer.router('db.json')

// create middlewares to convert js to json
const middleware = jsonServer.defaults()

// connect/ use middleware and router in server
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

// setup port for the server (json server defaultly run in 3000 port )
// change port from same ports change by process.env.PORT 
const port = 5000 || process.env.PORT 

// to listen server for resolving request
mediaPlayerServer.listen(port,()=>{
    console.log(`mediaPlayerServer started at ${port} and ready fetch request`);
}) 