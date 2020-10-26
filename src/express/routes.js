const router = require('express').Router();
const quoteService = require('../services/quote');

router.get('/random', async (req, res) => {
  try {
    const quote = await quoteService.getRandomQuote();
    return res.json(quote);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json(
        `Ahh, something seems to have gone terribly wrong. We will fix it asap`
      );
  }
});

module.exports = router;
