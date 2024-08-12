import express from 'express';
import chatRouter from "./routers/chatRoute";
import fileDB from "./fileDB";
import cors from 'cors';

const app = express();
const port = 8000;

app.use(cors())
app.use(express.json())
app.use('/', chatRouter)


const run = async () => {
    await fileDB.init();

    app.listen(port, () => {
        console.log('Server starter : http://127.0.0.1:' + port);
    });
};

run().catch(console.error);