const {Client} = require('pg');

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "7424",
    database: "InMyAbaya"

})

client.connect();
