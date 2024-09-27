const express = require('express');
const app = express();
const cors = require('cors');
const auth = require('../Node/middleware/token');
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(auth);

// API route
app.post('/api/add-value' ,(req, res) => {

  const value1 = req.body.value1;
  const value2 = req.body.value2;

  if(typeof(value1) !== "number"){
    return res.status(400).json({ message: 'Value1 is not in numeric!' });
  }
  if(typeof(value2) !== "number"){
    return res.status(400).json({ message: 'Value2 is not in numeric!' });
  }

  const result = value1 + value2;
  res.json(result);

});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
