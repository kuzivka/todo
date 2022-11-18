import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';

dotenv.config();
const app = express();

mongoose
  .connect(
    'mongodb+srv://angelina:<angelina>@cluster0.5r8udvw.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('DB is conected');
  });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
} else {
  app.get('/', (req, res) => res.send('Set production'));
}

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
