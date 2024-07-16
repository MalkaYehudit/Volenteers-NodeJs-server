import { configDotenv } from 'dotenv';
import  express  from 'express';
import helpRequestRouter from './routers/HelpRequestRouter.js';
import volunteersRouter from './routers/VolunteersRouter.js';

configDotenv()
const app = express();
const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

app.use(express.json());

app.use('/api/helpRequests', helpRequestRouter);
app.use('/api/volunteers', volunteersRouter);
app.use('/', (req, res) => {
    res.send('welcome to Hadas&Malka');
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})

