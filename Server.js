const http = require('http')


const server = http.createServer((request, response) => {
    console.log('Request Received')

    console.log('Method =', request.method)
    console.log('Path = ', request.url)

    if (request.method == 'GET') {
        if (request.url == '/person') {
            console.log('Get your INfo from person')
        } else if (request.url == '/product') {
            console.log('Get your INfo from product')
        }
    } else if (request.method == 'POST') {
        if (request.url == '/person') {
            console.log('Put your INfo into person')
        } else if (request.url == '/product') {
            console.log('put your INfo into product')
        }
    } else if (request.method == 'PUT') {
        if (request.url == '/person') {
            console.log('Add another person')
        } else if (request.url == '/product') {
            console.log('Add another product')
        }
    } else if (request.method == 'DELETE') {
        if (request.url == '/person') {
            console.log('Delete one person')
        } else if (request.url == '/product') {
            console.log('Delete one product')
        }
    }

    console.log()
    response.end()
})

server.listen(5000, '0.0.0.0', () => {
    console.log('Sever started on 5000 port')
})