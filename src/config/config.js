module.exports = {
    "development": {
      "username": "root",
      "password": "ushizaki",
      "database": "attendance",
      "dialect": "sqlite",
      "storage": "db-dev.sqlite3"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
  };