import express from 'express';
import fileDb from "../fileDB";

const chatRouter = express.Router();
chatRouter.use(express.json());

chatRouter.post('/messages', async (req, res) => {
    const {author , message} = req.body;

    if(author.trim() === '' || message.trim() === ''){
        return res.status(400).send({"error": "Author and message must be present in the request"})
    }
    const date = new Date().toISOString();

    const msgData = {id:crypto.randomUUID() ,author:author , message:message , date:date}
    await fileDb.addItem(msgData);
    res.send(msgData)
});


chatRouter.get('/messages', async (req, res) => {
    try{
        const queryDate = req.query.datetime as string;
        const messages = await fileDb.getItems();
        if(queryDate){
            const date = new Date(queryDate);
            const filteredMessages = messages.filter(message => new Date(message.date) > date);
            res.send(filteredMessages)
        }else{
            res.send(messages.slice(-30))
        }
    }catch (e) {
        res.status(400).send({"error": "Some problems with fetching data"})
    }

});

export default chatRouter;