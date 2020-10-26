const db = require('../db/models/');

module.exports = {
  getRandomQuote: async () => {
    const quote = db.Quote.findOne({ order: db.sequelize.random() });
    return quote;
  },
};
