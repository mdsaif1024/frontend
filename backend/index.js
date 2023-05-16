const express = require('express');
const app = express();
const port = 5000;

const userRouter = require('./routers/userRouter');
const mockupRouter = require('./routers/mockupRouter');
const utilRouter = require('./routers/util');

const cors = require('cors');

app.use(cors({
    origin : ['http://localhost:3000'],
}));

app.use(express.json());

// middleware
app.use('/user', userRouter);
app.use('/mockup', mockupRouter);
app.use('/util', utilRouter);

app.use(express.static('./static/uploads'));


app.get('/', (req, res) => {
    res.send('Working perfectly');
});


app.get('/add', (req, res) => {
    res.send('Response from add');
});

app.get('/getall', (req, res) => {
    res.send('You will get all');
});

app.get('/update', (req, res) => {
    res.send('Your system is updated now');
});

app.listen( port, () => {console.log('server started');});