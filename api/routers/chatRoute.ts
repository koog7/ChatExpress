import express from 'express';

const chatRouter = express.Router();
chatRouter.use(express.json());

chatRouter.post('/messages', async (req, res) => {
    const {author , message} = req.body;

    if(author.trim() === '' || message.trim() === ''){
        return res.status(400).send({"error": "Author and message must be present in the request"})
    }
    const date = new Date().toISOString().replace(/:/g, '-');
    res.send({id:crypto.randomUUID() ,author:author , message:message , date:date})
});

export default chatRouter;