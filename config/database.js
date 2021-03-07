module.exports = ({env}) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '38.17.53.112'),
        port: env.int('DATABASE_PORT', 22402),
        database: env('DATABASE_NAME', 'sucasa'),
        username: env('DATABASE_USERNAME', 'sucasa'),
        password: env('DATABASE_PASSWORD', 'welcomeToStrapi123'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});

// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'sqlite',
//         filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });

// Username: EjMa1aYQAE
//
// Database name: EjMa1aYQAE
//
// Password: eBA08jkTwv
//
// Server: remotemysql.com
//
// Port: 3306

// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'postgres',
//         host: env('DATABASE_HOST', '38.17.53.112'),
//         port: env.int('DATABASE_PORT', 22402),
//         database: env('DATABASE_NAME', 'sucasa'),
//         username: env('DATABASE_USERNAME', 'sucasa'),
//         password: env('DATABASE_PASSWORD', 'welcomeToStrapi123'),
//       },
//       options: {
//         ssl: true
//       },
//     },
//   },
// });


