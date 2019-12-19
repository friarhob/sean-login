const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.database('db/lala.db', (err) => {
    if(err) return console.error(err.message);
    console.log("connected to :memory: sqlite database");
});

db.close((err) => {
    if(err) return console.error(err.message);
    console.log("connection closed");
});
