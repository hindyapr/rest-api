module.exports = {
    "development": {
        "username": `${process.env.DB_USERNAME}`,
        "password": `${process.env.DB_PASSWORD}`,
        "database": "rest_api",
        "host": "127.0.0.1",
        "dialect": "postgres"
    },
    "test": {
        "username": `${process.env.DB_USERNAME}`,
        "password": `${process.env.DB_PASSWORD}`,
        "database": "rest_api",
        "host": "127.0.0.1",
        "dialect": "postgres"
    },
    "production": {
        "username": `${process.env.DB_USERNAME}`,
        "password": `${process.env.DB_PASSWORD}`,
        "database": "rest_api",
        "host": "127.0.0.1",
        "dialect": "postgres"
    }
}