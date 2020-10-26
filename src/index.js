//@ts-check
require('dotenv').config();
const app = require('./express/app');
const db = require('./db/models/index');

const PORT = process.env.PORT || '3000';

async function assertDatabaseConnectionOk() {
  console.log(`Checking database connection...`);
  try {
    await db.sequelize.authenticate();
    console.log('Database connection OK!');
  } catch (error) {
    console.log('Unable to connect to the database:');
    console.log(error.message);
    process.exit(1);
  }
}

async function init() {
  await assertDatabaseConnectionOk();

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

init();
