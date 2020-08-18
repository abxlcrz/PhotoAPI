import app from './app';
import { initConnection } from './database';
import { connection } from 'mongoose';

async function main() {
    // initConnection().catch(()=>{
    //     connection.on('error',console.error.bind(console,'error connection'));
    // });

    await app.listen(app.get('port'));
    console.log("server on port", app.get('port'));
}

main();

app.get('/users', (req, res) => {
    res.json({
        succes: true,
        message: "dou"
    })
});
