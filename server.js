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

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
  },

  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, ' A tour must have a price'],
  },
});

const Tour = mongoose.model('Tour', tourSchema);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app runing on port ${port}`);
});
