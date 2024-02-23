import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';
// import { Configuration, OpenAIApi } from 'openai';


dotenv.config();

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

// const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
    res.send('Hello from DALL-E!');
});

export default router;