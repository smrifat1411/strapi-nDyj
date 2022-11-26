// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('PGHOST', '127.0.0.1'),
//       port: env.int('PGPORT', 5432),
//       database: env('PGDATABASE', 'strapi'),
//       user: env('PGUSER', 'strapi'),
//       password: env('PGPASSWORD', 'password'),
//       ssl: env.bool(true),
//     },
//   },
// });
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST'),
      port: env.int('PGPORT'),
      database: env('PGDATABASE'),
      user: env('PGUSER'),
      password: env('PGPASSWORD'),
      ssl: env.bool(true),
    },
  },
});
