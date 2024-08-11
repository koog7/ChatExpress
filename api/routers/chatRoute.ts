import express from 'express';
import fileDb from "../fileDB";

const chatRouter = express.Router();
chatRouter.use(express.json());

chatRouter.post('/messages', async (req, res) => {
    const {author , message} = req.body;
    const products = await fileDb.getItems();
    console.log(products)
    if(author.trim() === '' || message.trim() === ''){
        return res.status(400).send({"error": "Author and message must be present in the request"})
    }
    const date = new Date().toISOString().replace(/:/g, '-');

    const msgData = {id:crypto.randomUUID() ,author:author , message:message , date:date}
    await fileDb.addItem(msgData);
    res.send(msgData)
});

export default chatRouter;