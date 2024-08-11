import express from 'express';
import chatRouter from "./routers/chatRoute";
import fileDB from "./fileDB";

const app = express();
const port = 8001;

app.use(express.json())
app.use('/', chatRouter)


const run = async () => {
    await fileDB.init();

    app.listen(port, () => {
        console.log('Server starter : http://127.0.0.1:' + port);
    });
};

run().catch(console.error);