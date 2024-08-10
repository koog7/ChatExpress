import express from 'express';

const chatRouter = express.Router();
chatRouter.use(express.json());

chatRouter.post('/messages', async (req, res) => {
    res.send('123')
});

export default chatRouter;