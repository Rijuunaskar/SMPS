const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { sequelize } = require('./models');
const fileController = require('./controller/fileController');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/load-document', fileController.loadDocument);
app.get('/get-all-file', fileController.getAllFileList);
app.get('/get-data/:id', fileController.getDataByFileId);
app.get('/', (req, res) => res.send('API is working!'));

const PORT = process.env.PORT || 7002;

sequelize.authenticate()
  .then(() => {
    console.log('✅ Database connected.');
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
.catch(err => console.error('❌ DB Connection failed:', err));
