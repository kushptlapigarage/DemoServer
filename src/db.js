// module.exports = {
//   development: {
//     dialect: 'sqlite',
//     storage: './db.development.sqlite',
//   },
//   test: {
//     dialect: 'sqlite',
//     storage: ':memory:',
//   },
//   production: {
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOSTNAME,
//     dialect: 'mysql',
//     use_env_variable: 'DATABASE_URL',
//   },
// };

const Sequelize = require('sequelize');

const Umzug = require('umzug');

export const sequelize = new Sequelize('wilsontest', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const location = 'build/migrations';

const umzug = new Umzug({
  storage: 'sequelize',
  storageOptions: {
    sequelize, // here should be a sequelize instance, not the Sequelize module
  },
  migrations: {
    params: [
      sequelize.getQueryInterface(),
      Sequelize, // Sequelize constructor - the required module
    ],
    path: location.toString(),
    pattern: /\.js$/,
  },
});

const runMigrations = async () => {
  try {
    console.log(new Date().toString(), 'running umzug migrations.');
    await umzug.up();
  } catch (e) {
    console.error(
      new Date().toString(),
      'Umzug migrations did not ran successfully ...',
      e,
    );
    process.exit(0);
  }
};

runMigrations()
  .then(() => {
    console.log('umzug completed ..');
  })
  .catch(console.log);
