const { createServer} = require('http')
const app = require('./app')

const server = createServer(app)

server.listen( 8080, () => {
    console.log('server running')
})