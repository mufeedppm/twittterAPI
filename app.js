
const express = require('express');
const axios = require('axios');

const app = express();
require('dotenv').config();

const apiKey = process.env.API_KEY;
const apiSecret = process.env.SECRET_KEY;
const bearerToken = process.env.BEARER_TOKEN;


app.get('/tweets/:id', async (req, res) => {
  const tweetId = req.params.id;

  try {
    const response = await axios.get(`https://api.twitter.com/2/tweets/${tweetId}`, {
      headers: {
        Authorization: `Bearer ${bearerToken}`
      },
      auth: {
        username: apiKey,
        password: apiSecret
      }
    });
    console.log(response)
    res.json(response.data);
  } catch (error) {
    
    console.log(error.response);
    res.status(500).json({ error: error });
  }
});


  
  app.listen(3000, () => {
    console.log('server running on port 3000');
  });