const app = require('fastify')({ logger: true })

app.register(require('@fastify/cors'), (instance) => {
    return (req, callback) => {
      const corsOptions = {
        // This is NOT recommended for production as it enables reflection exploits
        origin: true
      };
  
      // do not include CORS headers for requests from localhost
      if (/^localhost$/m.test(req.headers.origin)) {
        corsOptions.origin = false
      }
  
      // callback expects two parameters: error and options
      callback(null, corsOptions)
    }
  })

app.addContentTypeParser('application/json', { parseAs: 'string' }, function (req, body, done) {
    try {
        var json = JSON.parse(body)
        done(null, json)
    } catch (err) {
        err.statusCode = 400
        done(err, undefined)
    };
})

const USERS = [
    {
      id: 1,
      email: 'Neha@aceonics.com',
      name: 'Neha',
    },
    {
      id: 2,
      email: 'lucky@aceonics.com',
      name: 'lucky',
    },
    {
      id: 3,
      email: 'khushi@aceonics.com',
      name: 'khushi',
    },

  ];
app.get('/users', (req, res) => {
    return USERS;
})

app.post('/users', (req, res) => {
    const user = {
        id: USERS[USERS.length - 1] + 1,
        ...req.body
    };
    USERS.push(user)

    return user;
})

app.get('/users/:id', (req, res) => {
    const user = USERS.find((user) => user.id == req.params.id)
    return user;
})

app.patch('/users/:id', (req, res) => {
    const index = USERS.findIndex(user => user.id == req.params.id)
    USERS[index] = {
        ...USERS[index],
        ...req.body
    };
    return USERS[index];
})

app.delete('/users/:id', (req, res) => {
    const index = USERS.findIndex(user => user.id == req.params.id)
    USERS.splice(index, 1);

    return true;
})

app.get('/users/serach/:q', (req, res) => {
    return USERS.filter((user) =>
        user.name.includes(req.params.q) ||
        user.email.includes(req.params.q) 
    )
})

app.listen({ port: 3000 }, (err) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})