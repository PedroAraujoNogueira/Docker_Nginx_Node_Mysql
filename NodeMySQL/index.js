const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db-mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb'
} 

const mysql = require('mysql')
const connection = mysql.createConnection(config)
connection.query(`create table people(id int not null auto_increment, name varchar(255), primary key(id))`, 
    function (error, results, fields) {
        console.log('Provavelmente é um erro pq a tabela já foi criada!')
})


app.get('/', (req, resp) => {
    const sql = `INSERT INTO people(name) values ('Pedro')`
    connection.query(sql)

    const queryPeoples = `SELECT * FROM people`
    connection.query(queryPeoples,  function (error, results, fields) {
        const peoples = results.reduce((previousValue, currentValue) => 
            previousValue + `${currentValue.name}<br>` , ` `)
        
            resp.send(`<h1>Full Cycle Rocks!</h1>
            <h2>Parabéns, você está evoluindo!</h2>
            
            <h2>As pessoas presentes no banco são:<h2> 
            <h3> ${peoples} </h3>
        `)
    })
})

app.listen(port, () => {
    console.log('Running in port', port)
})