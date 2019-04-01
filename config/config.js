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
        "username": `xrfmfffthfbmpy`,
        "password": `fd9dc7610b184ad5724cea08f8d8edeef72a3411ee9cf478d48d2062a169f026`,
        "database": "d94of7ch93hm64",
        "host": "ec2-54-225-242-183.compute-1.amazonaws.com",
        "dialect": "postgres"
    }
}