import { Request, Response } from 'express';
import express from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    console.log('test');
});
