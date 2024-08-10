import express from 'express';
import chatRouter from "./routers/chatRoute";

const app = express();
const port = 8000;

app.use(express.json())
app.use('/', chatRouter)

app.listen(port, () => {
    console.log('Server starter : http://127.0.0.1:' + port);
});
