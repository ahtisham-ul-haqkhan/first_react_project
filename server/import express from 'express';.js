import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = 7000;
const MONGOURL = 'mongodb+srv://xtylishshaami:G1IuKBzGICuXQDWf@cluster0.vul2e.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGOURL)
  .then(() => {
    console.log('DB Connected successfully');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => console.log('DB Connection Error:', error));
