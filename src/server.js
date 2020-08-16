import 'dotenv/config'
import express from 'express';
import UserController from './app/controllers/UserController';
import { setQueues, UI } from 'bull-board'
import Queue from './app/lib/Queue';


const app = express();
setQueues(Queue.queues.map(queue => queue.bull));
app.use(express.json() );
app.post('/users', UserController.store);

app.use('/admin/queues', UI);
app.listen(3333, () => {
  console.log('Server running on localhost: 3333');
})

