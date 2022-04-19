const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


const Pool = require('pg').Pool
const pool = new Pool({
  user: 'juamtxtt',
  host: 'john.db.elephantsql.com',
  database: 'juamtxtt',
  password: 'R-hmNDhqP7UOhpWFMXaUGfdUz9eidfbZ',
  port: 5432,
})


app.get('/getData', (request, response) => {
    pool.query('SELECT * FROM public.vendor ORDER BY id ASC ', (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
  })

const port = process.env.PORT || 3000;
  app.listen(port, function () {
      console.log('Listening on port ' + port);
  }); 