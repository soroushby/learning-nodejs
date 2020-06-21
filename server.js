const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

const Db =
  'mongodb+srv://soroushby:Soroshby10@cluster0-gdiep.mongodb.net/natours?retryWrites=true&w=majority';
mongoose
  .connect(Db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('successful');
  });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app runing on port ${port}`);
});
