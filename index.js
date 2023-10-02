const http = require('http')
const serveStatic = require('serve-static')

var serve = serveStatic('build/site', { index: ['index.html', 'index.htm'] })
var server = http.createServer((req, resp) => {
        serve(req, resp, () => { })
});

server.listen(8001, () => {
        console.log("open http://localhost:8001");
})