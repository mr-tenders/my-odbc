const odbc = require('odbc')();
const { promisifyAll } = require('bluebird');

const db = promisifyAll(odbc);

const driver = '{SQL Server Native Client 11.0}';
const dsn = 'SQLExpress -- FooBar';
const server = 'ENG6\\SQLEXPRESS';
const uid = 'MyLogin';
const password = 'Welcome18!';
const database = 'FooBar';

const connString = `DRIVER=${driver};DSN=${dsn};Server=${server};UID=${uid};PWD=${password};Database=${database}`;

(async ()=> {
    try {
        await db.openAsync(connString);
        const result = await db.queryAsync('select * from MyTable');
    } catch (err) {
        console.error(err);
    }
})();
