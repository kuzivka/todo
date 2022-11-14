import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
