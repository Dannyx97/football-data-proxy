const express = require('express');
const cors = require('cors');
require('dotenv').config();
const needle = require('needle');

const router = express.Router();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

//app.use('/api', require('./routes'));

const API_TEAMS_URL = process.env.API_TEAMS_URL;
const API_STANDINGS_URL = process.env.API_STANDINGS_URL;
const API_MATCHES_URL = process.env.API_MATCHES_URL;
const API_KEY_NAME = process.env.API_KEY_NAME;
const API_KEY_VALUE = process.env.API_KEY_VALUE;

const options = {"headers": {[API_KEY_NAME]: API_KEY_VALUE}};

app.get('/teams', async (req, res) => {
    try{
        const apiRes = await needle('get', `${API_TEAMS_URL}`, options);
        const data = apiRes.body;
        res.status(200).json(data);
    } catch(error){
        res.status(500).json({error});
    }
});

app.get('/standings', async (req, res) => {
    try{
        const apiRes = await needle('get', `${API_STANDINGS_URL}`, options);
        const data = apiRes.body;
        res.status(200).json(data);
    } catch(error){
        res.status(500).json({error});
    }
});

app.get('/matches', async (req, res) => {
    try{
        const apiRes = await needle('get', `${API_MATCHES_URL}`, options);
        const data = apiRes.body;
        res.status(200).json(data);
    } catch(error){
        res.status(500).json({error});
    }
});

app.get('/example', (req, res) => {
    res.json({Success: 'true'});
})



app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));