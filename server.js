const http = require('http')

const server = http.createServer((req, res) => {
	const payload = JSON.stringify({payload:'Hello Lambda'})

	console.log('hit')
	res.writeHead(200)
	res.write(payload)
	res.end()
})

server.listen(3000, 'localhost', () => {
	console.log('listening on 3000')
})
