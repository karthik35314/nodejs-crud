require('dotenv').config();
const DB_PASS=process.env.DB_PASS
module.exports = {
  url: `mongodb+srv://mern:${DB_PASS}@cluster0.e774k.mongodb.net/test`
};
