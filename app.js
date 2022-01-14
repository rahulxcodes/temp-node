const http = require('http')

const server=http.createServer((req, res)=>{
if(req.url ==='/'){
    res.end('Its our home page')
} else if(req.url ==='/rahul'){
    res.end('its rahul page')
}else{res.end('something error happened')}
})

server.listen(5000)