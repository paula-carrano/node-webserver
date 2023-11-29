const http = require('http');


http.createServer((req, res) => {
    res.write("hola mundo");
    res.end('');
})
.listen(9010);

console.log("server listening on",9010);