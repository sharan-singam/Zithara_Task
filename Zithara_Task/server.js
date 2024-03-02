const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const allowedOrigins = ['http://localhost:3000', 'https://zithara.vercel.app'];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use('/api', routes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
