const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

const isProduction = process.env.NODE_ENV === 'production'

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
        ssl: isProduction ? {rejectUnauthorized: false} : false
      },
      options: {
        ssl: true,
      },
    },
  },
});